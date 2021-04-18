/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#E14032',
  success: '#28a745',
  default:'#D4D4D4',
  buttonText:'#878787',
  error: '#dc3545',
  lightgrey:'#AEAEAE',
  black:'#000000',
  grey:'#808080',
  bgGrey:'#ECECEC',
  bgLight:'#F9F9F9'
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: 16,
  medium: 18,
  regular: 24,
  large: 40,
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
const xlarge = regular * 5 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
  xlarge
}
