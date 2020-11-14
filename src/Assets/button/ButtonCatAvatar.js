import * as React from "react"
import Svg, { G, Circle, Text, TSpan } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

const ButtonCatAvatar = (props) => {
  return (
    <Svg width={44} height={44} viewBox="0 0 44 44" {...props}>
      <G fill="none" fillRule="evenodd">
        <Circle fill="#FFF" cx={22} cy={22} r={22} />
        <Text
          fontFamily="AppleColorEmoji, Apple Color Emoji"
          fontSize={24}
          fill="#323232"
        >
          <TSpan x={10} y={30}>
            {"\uD83D\uDC31"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default ButtonCatAvatar