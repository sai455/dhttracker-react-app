import { StyleSheet } from 'react-native'

export default function ({ Colors, Gutters, Layout }) {
  const base = {
    ...Layout.center,
    ...Gutters.largeHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  }
  const rounded = {
    ...base,
    borderRadius: 20,
  }

  return StyleSheet.create({
    base,
    rounded,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    regularButton:{
      backgroundColor: Colors.default,
      borderRadius: 5,
      minHeight: 50,
      textAlign:'center',
      color:Colors.buttonText,
      width: '100%'
    },
    loginButton:{
      color:Colors.black,
      backgroundColor: Colors.default,
    }
  })
}
