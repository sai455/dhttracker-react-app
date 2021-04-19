import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Toast } from '@/Components'

import { useTheme } from '@/Theme';
import { Button } from 'react-native-paper';
import { DropDown } from '@/Components'

const IndexSearchToolsContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const countriesList = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
    { label: 'France', value: 'france' },
  ];
  const [selectedCountry, setselectedCountry] = useState('');

  const setData = (option) => {
    setselectedCountry(option.label);
  };

  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Searchfor a Tools" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill]}>
        <View style={[Gutters.xlargeTMargin, Gutters.smallHPadding]}>
          <Button mode="contained" raised theme={{ roundness: 3 }} uppercase={false}
            onPress={() => navigation.navigate('BarCodeTool')}
            style={[Gutters.smallTMargin, Common.button.loginButton]}>
            Scan  BarCode
      </Button>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
        </View>

        <View style={[Gutters.smallTMargin, Gutters.smallHPadding]}>
          <Button mode="contained" raised theme={{ roundness: 3 }} uppercase={false}
            onPress={() => navigation.navigate('ToolsLookupPage')}
            style={[Gutters.smallTMargin, Common.button.loginButton]}>
            Lookup Tool
          </Button>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
        </View>

        <View style={[Gutters.smallLMargin, Gutters.largeTMargin, Gutters.smallRMargin]}>
          <DropDown list={countriesList} setData={setData} containerStyle={{ height: 45 }} placeholder={'Select Country'} searchablePlaceholder={'Search Country'}></DropDown>
        </View>
      </View>
      <View style={[Gutters.smallBMargin, Gutters.smallTMargin]}>
        <Button mode="contained" disabled={!selectedCountry ? true : false}
          onPress={() => navigation.navigate('ToolsSearchResults')}
          raised theme={{ roundness: 5 }} uppercase={false}
          style={[Gutters.smallHPadding, Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
          Search
          </Button>
      </View>


    </>

  );
};
export default IndexSearchToolsContainer;