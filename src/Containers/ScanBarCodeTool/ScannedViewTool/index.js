import React from 'react';
import { Text,View, FlatList, StyleSheet, ScrollView  } from 'react-native';
import { Appbar  } from 'react-native-paper';
import { Button, Searchbar, List ,DataTable   } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';

import { useTheme } from '@/Theme'

const IndexBarCodeToolContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const colorsBack = ['lightgrey', 'white'];
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    },
    item: {
      width: '45%' 
    },
    itemdelete:{
      width:'5%',
      color:'lightgrey'
    }
  });
  return (
    <>
    <Appbar.Header >
      <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
      <Appbar.Content title="Manage Tool Boxes" color={Colors.white} />
    </Appbar.Header>
    <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
        <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
    </View>
    
    </>
    
  );
};
export default IndexBarCodeToolContainer;