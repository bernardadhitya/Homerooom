import * as React from "react"
import Svg, { Path } from "react-native-svg"

const IconHome = (props) => {
  const { color } = props;

  return (
    <Svg width={21} height={23} viewBox="0 0 21 23" {...props}>
      <Path
        d="M17.97 18.839c0 .763-.62 1.383-1.381 1.383H3.986c-.762 0-1.382-.62-1.382-1.383v-7.381c0-.366.149-.724.409-.982l7.274-7.206 7.275 7.206c.26.258.409.616.409.982v7.38zm1-9.783l-7.978-7.904a1.002 1.002 0 00-1.41 0L1.606 9.056a3.405 3.405 0 00-1.001 2.402v7.38a3.386 3.386 0 003.382 3.384h12.603a3.386 3.386 0 003.382-3.383v-7.381c0-.896-.365-1.771-1.001-2.402z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default IconHome;
