import * as React from "react"
import Svg, { Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconBack = (props) => {
  return (
    <Svg width={25} height={17} viewBox="0 0 16 11" {...props}>
      <Path
        d="M14.785 4.464H4.019l3.578-2.661A1 1 0 006.403.198l-6 4.464a1 1 0 000 1.605l6 4.464a1.002 1.002 0 001.399-.206 1 1 0 00-.205-1.399L4.019 6.464h10.766a1 1 0 100-2"
        fill="#747987"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconBack;
