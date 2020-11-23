import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

const IconLogout = (props) => {
  return (
    <Svg width={21} height={21} viewBox="0 0 21 21" {...props}>
      <G fill="#747987" fillRule="evenodd">
        <Path d="M14.605 16.099a1 1 0 00-1 1v1.84H2.535v-16h11.07v1.842a1 1 0 002 0V1.94a1 1 0 00-1-1H1.535a1 1 0 00-1 1v18a1 1 0 001 1h13.07a1 1 0 001-1v-2.841a1 1 0 00-1-1" />
        <Path d="M19.227 10.073l-6-3.464a1 1 0 00-1 1.733l2.769 1.597H5.943a1 1 0 100 2h9.053l-2.77 1.598a1 1 0 101 1.732l6-3.464a1 1 0 000-1.732" />
      </G>
    </Svg>
  )
}

export default IconLogout;
