import * as React from "react"
import Svg, { Defs, Rect, G, Use, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const IconMenu = (props) => {
  return (
    <Svg width={5} height={15} viewBox="0 0 5 15" {...props}>
      <Defs>
        <Rect id="prefix__b" x={0} y={0} width={362} height={114} rx={8} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(-342 -20)">
          <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <Use fill="#FFF" xlinkHref="#prefix__b" />
        </G>
        <G fill="#747987">
          <Path d="M.402 7.561A2.04 2.04 0 002.44 9.599a2.04 2.04 0 002.038-2.038A2.04 2.04 0 002.44 5.523 2.04 2.04 0 00.402 7.561M.402 12.5A2.04 2.04 0 002.44 14.54 2.04 2.04 0 004.477 12.5a2.04 2.04 0 00-2.038-2.038A2.04 2.04 0 00.401 12.5M.402 2.622A2.04 2.04 0 002.44 4.66a2.04 2.04 0 002.038-2.038A2.04 2.04 0 002.44.584 2.04 2.04 0 00.402 2.622" />
        </G>
      </G>
    </Svg>
  )
}

export default IconMenu
