/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      color: Colors.text,
    },
    textRegularDefault: {
      fontSize: FontSize.medium,
      color: Colors.text,
    },
    textRegular: {
      fontSize: FontSize.regular,
      color: Colors.text,
    },
    textSmallBold: {
      fontSize: FontSize.small,
      color: Colors.text,
      fontWeight: 'bold',
    },
    textRegularBold: {
      fontSize: FontSize.regular,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textLarge: {
      fontSize: FontSize.large,
      color: Colors.text,
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      color: Colors.text,
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
    textlight:{
      color:Colors.lightgrey
    },
    textBlack:{
      color:Colors.black
    },
    textFlexRight:{
      flex:1,
      textAlign: 'right',
      color:Colors.lightgrey
    },
    textHeader:{
      fontSize:14,
      lineHeight:16,
      color:Colors.lightgrey
    },
    textFont12:{
      textTransform: 'uppercase',
      fontSize: FontSize.small,
      color: Colors.text,
      fontWeight: 'bold',
    },
    borderGrey:{
      borderWidth:0.5,
      backgroundColor: Colors.bgGrey,
      color:Colors.black
    },
    text13: {
      fontSize: 13,
      color: Colors.text,
      fontWeight: 'bold'
    },
    fontSize12:{
      fontSize: 11
    },
    fontGreen:{
      color:'green'
    },
    fontRed:{
      color:'red'
    },
    fontBlue:{
      color:'blue'
    }
  })
}
