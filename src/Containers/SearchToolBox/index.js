import React from 'react';
import { Text,View } from 'react-native';
import { Appbar  } from 'react-native-paper';

import { useTheme } from '@/Theme'

const IndexSearchToolsContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  return (
    <>
    <Appbar.Header >
      <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
      <Appbar.Content title="Search Tools" color={Colors.white} />
    </Appbar.Header>
    <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
      <Text style={[Fonts.textRegularBold, Gutters.largeTMargin]}>Search Tool page loadded</Text>
    </View>
    </>
    
  );
};
export default IndexSearchToolsContainer;