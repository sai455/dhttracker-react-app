import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  View,
  Text, StyleSheet
} from 'react-native'
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import { Brand, ProfilePic } from '@/Components'
import { useTheme } from '@/Theme'

const IndexHomePageContainer = ({ navigation }) => {
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const navigateToBha=(bhaRoute)=>{
    setVisible(false);
    navigation.navigate(bhaRoute);
  }
  return (
    <>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
        <View style={styles.row}>
          <View style={[styles.leftContainer]}>
            <Text style={[Fonts.textRegularBold, Gutters.largeTMargin, { textAlign: 'left' }]}>Welcome</Text>
            <Text style={[Fonts.textSmall]}>John Nicholson</Text>
          </View>
          <View style={[styles.rightContainer]}>
            <ProfilePic />
          </View>
        </View>

        <View style={[[Layout.colCenter, Gutters.xlargeTMargin,]]}>
          <Brand />
          <Text style={[Fonts.titleSmall, Gutters.smallTMargin]}>DHT Tracker</Text>
        </View>

      </View>
      <View style={[Layout.fill, Gutters.xlargeTMargin, Gutters.smallHPadding]}>
        <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
          onPress={showDialog}
          style={[Gutters.smallTMargin, Common.button.loginButton]}>
          Update Tools Status
                </Button>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title style={[Fonts.textSmall]}>Please select one from Update Tool Status</Dialog.Title>
            <Dialog.Content>
              <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                onPress={() => navigateToBha('RigUpBha')}
                style={[Gutters.largeTMargin, Common.button.loginButton]}>
                Rig Up BHA
                </Button>
              <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                onPress={() => navigateToBha('BreakDownBha')}
                style={[Gutters.largeTMargin, Common.button.loginButton]}>
                Break Down BHA
                </Button>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => console.log('Cancel')}>Cancel</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
        <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
          onPress={() => navigation.navigate('ManageToolBoxes')}
          style={[Gutters.largeTMargin, Common.button.loginButton]}>
          Manage Toolboxes
                </Button>
        <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
          onPress={() => navigation.navigate('SearchTools')}
          style={[Gutters.largeTMargin, Common.button.loginButton]}>
          Search for Tools
                </Button>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row', justifyContent: 'space-between'
  },
  leftContainer: {
    justifyContent: 'flex-start',
  },
  rightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

});
export default IndexHomePageContainer;