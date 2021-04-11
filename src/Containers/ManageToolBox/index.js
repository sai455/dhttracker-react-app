import React from 'react';
import { Text,View } from 'react-native';
import { Appbar  } from 'react-native-paper';

import { useTheme } from '@/Theme'

const IndexManageToolBoxesContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  return (
    <>
    <Appbar.Header >
      <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
      <Appbar.Content title="Manage Tool Boxes" color={Colors.white} />
    </Appbar.Header>
    <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
      <Text style={[Fonts.textRegularBold, Gutters.largeTMargin]}>Manage Tool Box page loadded</Text>
    </View>
    </>
    
  );
};
export default IndexManageToolBoxesContainer;