import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconAssignments = (props) => {
  const { color } = props;

  return (
    <Svg width={23} height={20} viewBox="0 0 23 20" {...props}>
      <Path
        d="M20.035 17.459l-17.497.051V6.923h8.75c.072 0 .143-.012.213-.027l8.534-.024v10.587zM2.538 2.625h5.967l1.158 2.298H2.538V2.625zm17.55 2.298h-8.185l-1.889-3.748a1.002 1.002 0 00-.894-.55H1.538a1 1 0 00-1 1V17.51a1.95 1.95 0 001.95 1.949h17.6a1.95 1.95 0 001.947-1.949V6.872a1.95 1.95 0 00-1.948-1.949z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconAssignments;
