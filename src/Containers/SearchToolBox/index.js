import React from 'react';
import { Text,View } from 'react-native';
import { Appbar  } from 'react-native-paper';
import { Toast } from '@/Components'

import { useTheme } from '@/Theme';
import { Button, Searchbar, List ,DataTable   } from 'react-native-paper';

const IndexSearchToolsContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  return (
    <>
    <Appbar.Header >
      <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
      <Appbar.Content title="Searchfor a Tools" color={Colors.white} />
    </Appbar.Header>
    {/* <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
      <Text style={[Fonts.textRegularBold, Gutters.largeTMargin]}>Search Tool page loadded</Text>
    </View> */}
    <View style={[ Gutters.xlargeTMargin, Gutters.smallHPadding]}>
      <Button mode="contained" raised theme={{ roundness: 3 }}  uppercase={false}
                        onPress={() => navigation.navigate('BarCodeTool')}
                        style={[Gutters.smallTMargin, Common.button.loginButton]}>
                        Scan  BarCode
      </Button>
      </View>

      <View style={[Gutters.largeTMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
       </View>

       <View style={[ Gutters.smallTMargin, Gutters.smallHPadding]}>
          <Button mode="contained" raised theme={{ roundness: 3 }}  uppercase={false}
                            onPress={() => navigation.navigate('HomePage')}
                            style={[Gutters.smallTMargin, Common.button.loginButton]}>
                            Lookup Tool
          </Button>
      </View>

      <View style={[Gutters.largeTMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
       </View>
     
    </>
    
  );
};
export default IndexSearchToolsContainer;