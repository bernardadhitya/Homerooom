import * as React from "react"
import Svg, { G, Rect, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title, filter */

const IconButtonNext = (props) => {
  return (
    <Svg width={67} height={67} viewBox="0 0 67 67" {...props}>
      <G fill="none" fillRule="evenodd">
        <Rect fill="#FFF" width={67} height={67} rx={16} />
        <Path
          d="M44.438 32.399l-8.362-6.128a1.41 1.41 0 00-1.95.281c-.46.61-.332 1.469.287 1.922l4.986 3.653H24.394c-.771 0-1.394.615-1.394 1.373 0 .757.623 1.372 1.394 1.372h15.005l-4.986 3.654a1.356 1.356 0 00-.287 1.92 1.406 1.406 0 001.95.283l8.362-6.129a1.362 1.362 0 000-2.201"
          fill="#747987"
        />
      </G>
    </Svg>
  )
}

export default IconButtonNext;
