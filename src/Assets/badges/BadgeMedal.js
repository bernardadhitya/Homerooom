import * as React from "react"
import Svg, { Defs, Rect, G, Use, Text, TSpan } from "react-native-svg"

const BadgeMedal = (props) => {
  return (
    <Svg width={38} height={60} viewBox="0 0 38 60" {...props}>
      <Defs>
        <Rect id="prefix__b" x={0} y={0} width={86} height={120} rx={9} />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(-25 -12)">
          <Use fill="#000" filter="url(#prefix__a)" xlinkHref="#prefix__b" />
          <Use fill="#FFF" xlinkHref="#prefix__b" />
        </G>
        <Text
          fontFamily="AppleColorEmoji, Apple Color Emoji"
          fontSize={60}
          fill="#323232"
          transform="translate(-25 -12)"
        >
          <TSpan x={13} y={65}>
            {"\uD83C\uDF96"}
          </TSpan>
        </Text>
      </G>
    </Svg>
  )
}

export default BadgeMedal
