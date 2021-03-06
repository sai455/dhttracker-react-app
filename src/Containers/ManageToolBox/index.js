import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Text, Appbar, List, Colors as PapperColors, Button, Searchbar } from 'react-native-paper';
import { useTheme } from '@/Theme';

import { DropDown } from '@/Components';

const IndexManageToolBoxesContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const listData = [
    { id: 2, toolboxname: 'DEX', noofTools: 23, status: 'available', country: 'Saudi Arabia' },
    { id: 3, toolboxname: 'DEX', noofTools: 23, status: 'available', country: 'Saudi Arabia' },
    { id: 4, toolboxname: 'DEX', noofTools: 23, status: 'available', country: 'India' },
    { id: 5, toolboxname: 'ABC', noofTools: 3, status: 'available', country: 'Saudi Arabia' },
    { id: 6, toolboxname: 'RES', noofTools: 53, status: 'available', country: 'India' },
    { id: 7, toolboxname: 'MAN', noofTools: 23, status: 'available', country: 'India' },
    { id: 8, toolboxname: 'MAN', noofTools: 23, status: 'available', country: 'Saudi' },
    { id: 10, toolboxname: 'ANT', noofTools: 23, status: 'available', country: 'Saudi' },
    { id: 1, toolboxname: 'KEM', noofTools: 23, status: 'available', country: 'Saudi' }

  ];

  const [selectedCountry, setselectedCountry] = useState('');

  const setCountry = (option) => {
    setselectedCountry(option.label);
  };

  const countriesList = [
    { label: 'USA', value: 'usa' },
    { label: 'UK', value: 'uk' },
    { label: 'France', value: 'france' }
  ];
  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Manage Tool Boxes" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
        <Button mode="contained" icon="camera" raised theme={{ roundness: 5 }} uppercase={false}
          style={[Gutters.smallTMargin, Common.button.loginButton]}>
          Scan Barcode
       </Button>

        <View>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
        </View>

        <View style={[Gutters.smallTPadding]}>
          <DropDown list={countriesList} setData={setCountry} containerStyle={{ height: 45 }} placeholder={'Select Country'} searchablePlaceholder={'Search for Country'}></DropDown>
        </View>


        <View style={[Layout.fill, Gutters.largeTMargin]}>

          <FlatList
            data={listData}
            renderItem={({ item, index }) =>
              <View style={[index % 2 == 0 ? Common.backgroundLight : Common.backgroundGrey]}>
                <TouchableOpacity onPress={() => navigation.navigate('ToolBoxView')}>
                <View style={Layout.flatListContainer}>
                  <View style={Layout.flatListRow}>
                    <Text style={Fonts.textHeader}>TOOL BOX</Text>
                    <Text style={[Fonts.textFont12]}>{item.toolboxname}</Text>
                    <Text style={[Fonts.textHeader, Gutters.smallTPadding]}>STATUS</Text>
                    <Text style={[Fonts.textFont12]}>{item.status}</Text>
                  </View>
                  <View style={Layout.flatListRow}>
                    <Text style={[Fonts.textHeader, Fonts.textRight]}>NO. OF TOOLS</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.noofTools}</Text>
                    <Text style={[Fonts.textHeader, Fonts.textRight, , Gutters.smallTPadding]}>AVAILABLE</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.country}</Text>
                  </View>
                  <View style={Layout.flatListIconRow}>
                    <Button icon="delete"
                      color={PapperColors.grey500}
                      mode="text"
                      style={[Gutters.smallRPadding, Gutters.largeTPadding]}
                      onPress={() => console.log(item.id)}>
                    </Button>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
            }
          />
        </View>

        <View style={[Gutters.smallBMargin, Gutters.smallTMargin]}>
          <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
            onPress={() => navigation.navigate('CreateToolBox')}
            style={[Gutters.smallHPadding, Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
            Create New Toolbox
          </Button>
        </View>
      </View>

    </>

  );
};
export default IndexManageToolBoxesContainer;