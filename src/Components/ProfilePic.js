import React from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '../Theme'
import { Avatar } from 'react-native-paper';
const ProfilePic = ({ height = 42, width = 42, mode = 'contain' }) => {
  const { Layout, Images } = useTheme()

  return (
    <View style={{ height, width }}>
        <Avatar.Image size={42} source={Images.profilepic} resizeMode={mode} />
    </View>
  )
}

export default ProfilePic
