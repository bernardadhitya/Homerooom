import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Layout, Input, Card, SelectItem, IndexPath, Select } from '@ui-kitten/components';
import { Fonts } from '../../Constants/Fonts';
import { AppLoading } from 'expo';
import CharacterMrTeacher from '../../Assets/characters/CharacterMrTeacher';

const data = [
  'Bernard',
  'Kim',
  'Beatrice',
  'Jasmine'
];

const CreateClassForm = () => {
  const [classSubject, setClassSubject] = useState('');
  const [className, setClassName] = useState('');
  const [selectedStudents, setSelectedStudents] = useState([]);
  let [fontsLoaded] = useFonts(Fonts);

  const displayValue = () => {
    const selectedStudentsName = selectedStudents.map(({row}) => (data[row]));
    return <Text>{selectedStudentsName.join(', ')}</Text>;
  };

  console.log(displayValue);

  const renderStudentsOption = (title) => {
    return(
      <SelectItem title={title}/>
    )
  };

  return fontsLoaded ? (
    <Layout>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Class Subject</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <Input
          placeholder='Example: Mathematics, Science, etc'
          value={classSubject}
          onChangeText={value => setClassSubject(value)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Class Name</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <Input
          placeholder='Example: Mathematics, Science, etc'
          value={className}
          onChangeText={value => setClassName(value)}
        />
      </View>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Class Avatar</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <ScrollView horizontal style={styles.row}>
          <Card style={{marginRight: 10}}>
            <CharacterMrTeacher/>
          </Card>
          <Card style={{marginRight: 10}}>
            <CharacterMrTeacher/>
          </Card>
          <Card style={{marginRight: 10}}>
            <CharacterMrTeacher/>
          </Card>
          <Card style={{marginRight: 10}}>
            <CharacterMrTeacher/>
          </Card>
        </ScrollView>
      </View>
      <View style={{marginVertical: 10}}>
        <Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Class Avatar</Text>
          <Text style={{fontFamily: 'SemiBold', fontSize: 12, color: '#EF5B54'}}>*</Text>
        </Text>
        <View style={styles.row}>
          <TouchableOpacity style={{
            backgroundColor: '#EF5B54',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            marginRight: 10
          }}>
            <Text style={{color: '#EF5B54'}}>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#FDD444',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            marginRight: 10
          }}>
            <Text style={{color: '#FDD444'}}>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#9DCB37',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            marginRight: 10
          }}>
            <Text style={{color: '#9DCB37'}}>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#99E1DD',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            marginRight: 10
          }}>
            <Text style={{color: '#99E1DD'}}>R</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            backgroundColor: '#63C7FD',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 14,
            marginRight: 10
          }}>
            <Text style={{color: '#63C7FD'}}>R</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginVertical: 10}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 12}}>Add Students</Text>
        <Select
          multiSelect={true}
          value={displayValue}
          selectedIndex={selectedStudents}
          onSelect={index => setSelectedStudents(index)}
        >
          {data.map(student => renderStudentsOption(student))}
        </Select>
      </View>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <View style={styles.center, {
          marginTop: 12,
          alignItems: 'center',
          paddingTop: 10,
          paddingBottom: 4,
          backgroundColor: '#63C7FD',
          borderRadius: 8
        }}>
          <Text style={{fontFamily: 'Medium', fontSize: 12, color: '#FFFFFF'}}>Finalize</Text>
        </View>
      </TouchableOpacity>
    </Layout>
  ) : <AppLoading/>;
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  layout: {
    justifyContent: 'center',
    marginVertical: 10
  },
  center: {
    justifyContent: 'center',
  }
});

export default CreateClassForm