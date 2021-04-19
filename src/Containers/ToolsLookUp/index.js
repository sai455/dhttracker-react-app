import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Appbar, List, Colors as PapperColors, Button, Searchbar } from 'react-native-paper';
import { useTheme } from '@/Theme';
import { DropDown } from '@/Components';
import DropDownPicker from 'react-native-dropdown-picker';

const IndexToolsLookupContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const [motorCategory, setmotorCategory] = useState('');
  const [odMax, setodMax] = useState('');
  const [topThread, settopThread] = useState('');
  const [bottomThread, setbottomThread] = useState('');
  const [tot, settot] = useState('');

  const setData = (option) => {
    setmotorCategory(option.label);
  };

  const setOd = (option) => {
    setodMax(option.label);
  };

  const setTopThread = (option) => {
    settopThread(option.label);
  };
  const setBottomThread = (option) => {
    setbottomThread(option.label);
  };
  const setTOT = (option) => {
    settot(option.label);
  };

  const motorsList = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
    { label: 'France', value: 'france' }
  ];

  const oDList = [
    { label: '1-3in', value: '1-3in' },
    { label: '45-56in', value: '45-56in' },
    { label: '70-56in', value: '70-56in' }
  ];

  const topThreadListList = [
    { label: '40', value: '40' },
    { label: '45', value: '45' },
    { label: '70', value: '70' }
  ];
  const bottomThreadList = [
    { label: '30', value: '30' },
    { label: '20', value: '20' },
    { label: '10', value: '10' }
  ];
  const totList = [
    { label: 'TOT1', value: 'tot1' },
    { label: 'TOT2', value: 'tot2' },
    { label: 'TOT3', value: 'tot3' }
  ];

  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Lookup Tool" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding, Gutters.smallRMargin]}>
        
        <Text style={[Fonts.textCenter,Fonts.textHeader,Gutters.largeTMargin]}>select one or more properties to search for Tools</Text>
        
        <View style={[ Gutters.largeTMargin]}>
          <DropDown list={motorsList} setData={setData} containerStyle={{ height: 45 }} placeholder={'Select Category'} searchablePlaceholder={'Search Category'}></DropDown>
        </View>
        

        <View style={[ Gutters.largeTMargin]}>
          <DropDown list={oDList} setData={setOd} containerStyle={{ height: 45 }} placeholder={'Select Max OD(in)'} searchablePlaceholder={'Search Max OD'}></DropDown>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <DropDown list={topThreadListList} setData={setTopThread} containerStyle={{ height: 45 }} placeholder={'Select Top Thread'} searchablePlaceholder={'Search Top Thread'}></DropDown>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <DropDown list={bottomThreadList} setData={setBottomThread} containerStyle={{ height: 45 }} placeholder={'Select Bootom Thread'} searchablePlaceholder={'Search Bottom Thread'}></DropDown>
        </View>

        <View style={[ Gutters.largeTMargin]}>
          <DropDown list={totList} setData={setTOT} containerStyle={{ height: 45 }} placeholder={'Select TOT'} searchablePlaceholder={'Search TOT'}></DropDown>
        </View>

      </View>

      <View style={[Gutters.smallBMargin, Gutters.smallTMargin]}>
        <Button mode="contained" 
          onPress={() => navigation.navigate('ToolsSearchResults')}
          raised theme={{ roundness: 5 }} uppercase={false}
          style={[Gutters.smallHPadding, Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
          Search Tool
          </Button>
      </View>



    </>

  );
};
export default IndexToolsLookupContainer;