// @flow
// import { Platform } from 'react-native'

const Colors = {
  black: '#212121',
  white: '#ffffff',
  brownishGrey: '#757575',
  veryLightPink: '#bdbdbd',
  brownGrey: '#9b9b9b',
  blackTwo: '#000000',
  white90: 'rgba(255, 255, 255, 0.9)',
  brownGreyTwo: '#919191',
  darkSkyBlue: '#4a90e2',
  orangeyRed: '#d91d1d',
  veryLightPinkTwo: '#dcdcdc',
  lightBlueGrey90: 'rgba(210, 213, 219, 0.9)',
  gunmetal: '#50555c',
  lightGreyBlue: '#adb3bc',
  paleGrey: '#fcfcfe',
  black4: 'rgba(3, 3, 3, 0.04)',
  blueGrey: '#8f8e94',
  blackThree: '#030303',
  veryLightPinkThree: '#d8d8d8',
  darkSlateBlue: '#162656',
  denimBlue: '#3b5998',
  appleGreen: '#7ed321',
  grapefruit: '#f15f5f',
  watermelon: '#fa4169',
  blueyGrey: '#8d92a3',
  lightBlueGrey: '#cdcdd7',
  apricot: '#f7b579',
  darkPeriwinkle: '#6478d3',
  veryLightPinkFour: '#f2f2f2',
  transparent: 'rgba(255, 255, 255, 0)',
  shadow: 'rgba(0, 0, 0, 0.07)'
}
const Header = {
  iosHeight: 88,
  iPhoneXHeight: 88,
  android: 55,
  lensBar: 44
}
const Footer = {
  height: 41
}

const getBaseHeaderHeight = () => {
  return Header.iosHeight
}
export { Colors }
export { Header }
export { Footer }
export { getBaseHeaderHeight }
