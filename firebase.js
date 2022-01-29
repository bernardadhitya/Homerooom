import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "***",
  authDomain: "homerooom-service.firebaseapp.com",
  databaseURL: "https://homerooom-service.firebaseio.com",
  projectId: "homerooom-service",
  storageBucket: "homerooom-service.appspot.com",
  messagingSenderId: "***",
  appId: "***"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// firebase.firestore().collection('users').add({
//   name: 'Caroline',
//   role: 'student',
//   email: 'caroline@homerooom.com',
//   classes: ['OffH58cBtrB0boseVRWF'],
//   avatar: 'rabbit'
// })

export const createUser = async (userData) => {
  const { name, role, email, avatar} = userData;
  await db.collection('users').add({
    name,
    role,
    email,
    avatar,
    classes: []
  });
}

export const createClass = async (classData) => {
  const { name, subject, teacherId, avatar, color, students} = classData;
  await db.collection('classes').add({
    name,
    subject,
    teacher_id: teacherId,
    avatar,
    color,
    assignments: [],
    students
  })
  .then(async (classRef) => {
    const teacherData = await getUserById(teacherId);
    const studentsData = await getUsersByUserId(students);

    const pushClassesToStudents = async () => {
      return Promise.all(studentsData.map(async (studentData) => {
        const { classes: studentClasses, userId: studentId  } = studentData;
        studentClasses.push(classRef.id);
        await db.collection('users').doc(studentId).update({
          classes: studentClasses
        });
      }));
    }

    await pushClassesToStudents();

    const { classes: teacherClasses } = teacherData;
    teacherClasses.push(classRef.id);
    await db.collection('users').doc(teacherId).update({
      classes: teacherClasses
    });
  });
}

export const createAssignment = async (assignmentData, classId) => {
  const { title, instructions, dueDate } = assignmentData;
  await db.collection('assignments').add({
    title,
    instructions,
    dueDate
  })
  .then(async (assignmentRef) => {
    const classData = await getClassById(classId);
    const { assignments } = classData;
    assignments.push({
      assignment_id: assignmentRef.id,
      title,
      students: {
        graded: [],
        submitted: []
      }
    });
    await db.collection('classes').doc(classId).update({
      assignments
    });
  })
}

export const addStudentToClassById = async (selectedStudentsId, classId) => {
  const classData = await getClassById(classId);
  const { students } = classData;
  selectedStudentsId.forEach(studentId => {
    students.push(studentId);
  });

  await db.collection('classes').doc(classId).update({
    students
  });
}

export const createSubmission = async (submissionData) => {
  const { assignmentId, studentId, classId, attachment } = submissionData;
  await db.collection('submissions').add({
    assignment_id: assignmentId,
    student_id: studentId,
    class_id: classId,
    attachment,
    status: 'submitted'
  });
}

export const gradeSubmissionById = async (submissionId, grade) => {
  const { score, teacherNote } = grade;
  const submissionData = await getSubmissionById(submissionId);
  const { class_id: classId, assignment_id, student_id } = submissionData;

  //give additional fields score and teacher note, and change status to graded
  await db.collection('submissions').doc(submissionId).update({
    score,
    teacher_note: teacherNote,
    status: 'graded'
  })

  const classWithAssignment = await getClassById(classId);
  const { assignments } = classWithAssignment;

  //move the previously submitted assignment in class to graded
  const updatedAssignments = assignments.map((assignment) => {
    const { assignment_id: id, students } = assignment;
    if (id === assignment_id) {
      const { submitted, graded } = students;
      const newSubmitted = submitted.filter((student) => student !== student_id);
      const newGraded = graded;
      newGraded.push(student_id);

      return {
        assignment_id: id,
        students: {
          submitted: newSubmitted,
          graded: newGraded
        }
      }
    } else {
      return assignment
    }
  });

  await db.collection('classes').doc(classId).update({
    assignments: updatedAssignments
  });
}

export const getAllClasses = async () => {
  const response = await db.collection('classes').get();
  const data = response.docs.map(doc => {
    const responseId = doc.id;
    const responseData = doc.data();
    return { class_id: responseId, ...responseData }
  });
  return data;
}

export const getAllStudents = async () => {
  const response = await db.collection('users').where("role", "==", "student").get();
  const data = response.docs.map(doc => {
    const responseId = doc.id;
    const responseData = doc.data();
    return { user_id: responseId, ...responseData }
  });
  return data;
}

export const getClassById = async (classId) => {
  const response = await db.collection('classes').doc(classId).get();
  const responseId = response.id;
  const responseData = response.data();
  return { classId: responseId, ...responseData};
}

export const getUserById = async (userId) => {
  const response = await db.collection('users').doc(userId).get();
  const responseId = response.id;
  const responseData = response.data();
  return { userId: responseId, ...responseData};
}

export const getAssignmentById = async (assignmentId) => {
  const response = await db.collection('assignments').doc(assignmentId).get();
  const responseId = response.id;
  const responseData = response.data();
  return { assignmentId: responseId, ...responseData};
}

export const getSubmissionById = async (submissionId) => {
  const response = await db.collection('submissions').doc(submissionId).get();
  const responseId = response.id;
  const responseData = response.data();
  return { submissionId: responseId, ...responseData};
}

export const getClassesByUserId = async (userId) => {
  const userData = await getUserById(userId);
  const { classes } = userData;

  const getClassesData = async () => {
    return Promise.all(classes.map(classId => getClassById(classId)));
  };

  const classesData = await getClassesData();

  return classesData;
}

export const getSubmissionByUserIdAndAssignmentId = async (userId, assignmentId) => {
  const response = await db.collection('submissions')
    .where('student_id', '==', userId)
    .where('assignment_id', '==', assignmentId)
    .get();
  const responseId = response.id;
  const responseData = response.data();
  return { submissionId: responseId, ...responseData};
}

export const getUsersByUserId = async (usersId) => {
  const getUsersData = async () => {
    return Promise.all(usersId.map(userId => getUserById(userId)));
  }

  const usersData = await getUsersData();

  return usersData;
}

export const getGradedAssignmentsByUserId = async (userId) => {
  const userData = await getUserById(userId);
  const { classes } = userData;

  const getGradedAssignments = async () => {
    return Promise.all(classes.map(async (classId) => {
      const classData = await getClassById(classId);
      const { assignments } = classData;
      
      const gradedAssignments = assignments.map((assignment) => {
        const { assignment_id, students: { graded } } = assignment;
        if (userId in graded) {
          return assignment_id
        } else {
           return;
        }
      });
      return gradedAssignments;
    }))
  }
  
}
