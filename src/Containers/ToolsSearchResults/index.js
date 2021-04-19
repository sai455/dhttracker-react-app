import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Appbar, List, Colors as PapperColors, Button ,Checkbox} from 'react-native-paper';
import { useTheme } from '@/Theme';
import { DropDown } from '@/Components';

const IndexToolsSearchResultsContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const listData = [
    { id: 2, toolboxname: 'DEX', type: 'CT Connector', status: 'available', country: 'Saudi Arabia', 'eqNo': '1234345678', 'availableStatus': 'Available' },
    { id: 3, toolboxname: 'DEX', type: 'CT Connector', status: 'available', country: 'Saudi Arabia', 'eqNo': '4345678', 'availableStatus': 'Available' },
    { id: 4, toolboxname: 'DEX', type: 'CT Connector', status: 'available', country: 'India', 'eqNo': '0564345678', 'availableStatus': 'Available' },
    { id: 5, toolboxname: 'ABC', type: 'CT Connector', status: 'available', country: 'Saudi Arabia', 'eqNo': '1234345678', 'availableStatus': 'unAvailable' },
    { id: 6, toolboxname: 'RES', type: 'CT Connector', status: 'available', country: 'India', 'eqNo': '15674345678', 'availableStatus': 'unAvailable' },
    { id: 7, toolboxname: 'MAN', type: 'CT Connector', status: 'available', country: 'India', 'eqNo': '1234345678', 'availableStatus': 'unAvailable' },
    { id: 8, toolboxname: 'MAN', type: 'CT Connector', status: 'available', country: 'Saudi', 'eqNo': '1234345678', 'availableStatus': 'Available' },
    { id: 10, toolboxname: 'ANT', type: 'CT Connector', status: 'available', country: 'Saudi', 'eqNo': '1234345678', 'availableStatus': 'Available' },
    { id: 1, toolboxname: 'KEM', type: 'CT Connector', status: 'available', country: 'Saudi', 'eqNo': '1234345678', 'availableStatus': 'Status' }

  ];
  const countriesList = [
    { label: 'Type', value: 'type' },
    { label: 'Description', value: 'Description' },
    { label: 'EQNO', value: 'EQNO' },
  ];
  const [selectedSortType, setselectedSortType] = useState('');

  const setData = (option) => {
    setselectedSortType(option.label);
  };

  const [checked, setChecked] = React.useState(false);

  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Search by Country" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>

        <View style={[Gutters.smallTMargin,Gutters.smallLMargin,Gutters.smallRMargin]}>
          <View style={[Layout.column]}>
            <View style={Layout.row}>
              <Text style={Gutters.smallVMargin}>SortBy :   </Text>
              <DropDown list={countriesList} setData={setData} containerStyle={{ height: 40, width:'80%'}}
                searchablePlaceholder={'Search Sort Type'}></DropDown>
            </View>

          </View>

        </View>

        <View style={[Layout.fill, Gutters.largeTMargin, Gutters.smallHPadding]}>
          <View style={[Layout.column,Common.backgroundGrey]}>
              <View style={Layout.row}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color = 'grey'
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={[Gutters.smallTMargin]}> Show only Available</Text>
              </View>
          </View>
                
          <FlatList
            data={listData}
            renderItem={({ item, index }) =>
              <View style={[index % 2 == 0 ? Common.backgroundLight : Common.backgroundGrey]}>
                <View style={Layout.flatListContainer}>
                  <View style={Layout.flatListHalf}>
                    <Text style={Fonts.textHeader}>TOOL BOX</Text>
                    <Text style={[Fonts.textFont12]}>{item.toolboxname}</Text>
                    <Text style={[Fonts.textHeader, Gutters.smallTPadding]}>TYPE</Text>
                    <Text style={[Fonts.textFont12]}>{item.type}</Text>
                    <Text style={[Fonts.textHeader, Gutters.smallTPadding]}>STATUS</Text>
                    <Text style={[Fonts.textFont12]}>{item.status}</Text>
                  </View>
                  <View style={Layout.flatListHalf}>
                    <Text style={[Fonts.textHeader, Fonts.textRight]}>EQ.No</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.eqNo}</Text>
                    <Text style={[Fonts.textHeader, Fonts.textRight, , Gutters.smallTPadding]}>AVAILABLE</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.country}</Text>
                    <Text style={[Fonts.textHeader, Fonts.textRight, , Gutters.smallTPadding]}>STATUS</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.availableStatus}</Text>
                  </View>

                </View>
              </View>
            }
          />
        </View>

        <View style={[Gutters.smallBMargin, Gutters.smallTMargin]}>
          <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
            style={[Gutters.smallHPadding, Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
            Search
          </Button>
        </View>

      </View>

     

    </>

  );
};
export default IndexToolsSearchResultsContainer;