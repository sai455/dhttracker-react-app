import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Text, Paragraph, Appbar, Subheading, TextInput, Colors as PapperColors, Button, Checkbox } from 'react-native-paper';
import { useTheme } from '@/Theme';

import { DropDown } from '@/Components';

const IndexCreateToolBoxContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const listData = [
    { id: 2, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'Maintained', country: 'Saudi Arabia',eqNumber:'2345860671' },
    { id: 3, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'available', country: 'Saudi Arabia',eqNumber:'562345860671' },
    { id: 4, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'available', country: 'India' ,eqNumber:'2345860671'},
    { id: 5, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'available', country: 'India',eqNumber:'2345860671' },
    { id: 6, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'available', country: 'India',eqNumber:'2345860671' },
    { id: 7, toolboxname: 'DEX' , type:'CT Connector', noofTools: 23, status: 'available', country: 'India',eqNumber:'2345860671' }

  ];

  const [selectedCountry, setselectedCountry] = useState('');
  const [toolBoxName, settoolBoxName] = React.useState('');
  const [salesOrderNo, setsalesOrderNo] = React.useState('');
  const [checked, setChecked] = React.useState(false);

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
        <Appbar.Content title="Create New Toolbox" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>

        <View style={[Gutters.largeTPadding, Gutters.smallLMargin, Gutters.smallRMargin]}>
          <TextInput style={{ height: 45 }}
            mode='outlined' label='ToolBox Name'
            placeholder="User Name" value={toolBoxName}
            onChangeText={u => settoolBoxName(u)}
          />
          <View style={[Gutters.largeTMargin]}>
            <DropDown list={countriesList} setData={setCountry} containerStyle={{ height: 45 }} placeholder={'Select Country'} searchablePlaceholder={'Search for Country'}></DropDown>
          </View>
        </View>


        <View style={[Layout.row, Gutters.smallTMargin, Layout.rowVCenter]}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color='grey'
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={[Gutters.smallTMargin]}>Tools Currently in use ?</Text>
        </View>

        <View style={[Gutters.smallTMargin,Gutters.smallLMargin,Gutters.smallRMargin,Gutters.smallBMargin]}> 
        <TextInput style={{ height: 45 }}
            mode='outlined' label='Sales Order Number'
            placeholder="Enter Sales Order Numver" value={salesOrderNo}
            onChangeText={u => setsalesOrderNo(u)}
          />
        </View>

        <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallLMargin, Gutters.smallRMargin]}>
          <View style={[Common.backgroundGrey, Layout.fullWidth]}>
            <Subheading style={[Fonts.textSmallBold]}>Add Tools?</Subheading>
            <Paragraph>Select one option to add Tools in {toolBoxName}</Paragraph>
            <View style={[Layout.row, Gutters.smallTMargin, Gutters.smallBMargin]}>
              <View style={[Layout.itemwidth30]}>
                <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                  style={[Fonts.borderGrey]}>
                  <Text style={[Fonts.fontSize12]}>Scan Barcode</Text>
                </Button>
              </View>
              <View style={[Layout.itemwidth30, Gutters.tinyLMargin]}>
                <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                  style={[Fonts.borderGrey, Fonts.text13]}>
                  <Text style={[Fonts.fontSize12]}>Lookup Tool</Text>
                </Button>
              </View>
              <View style={[Layout.itemwidth30, Gutters.tinyLMargin]}>
                <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                  style={[Fonts.borderGrey]}>
                  <Text style={[Fonts.fontSize12]}>EQ Number</Text>
                </Button>
              </View>
            </View>
          </View>
          <FlatList
            data={listData}
            renderItem={({ item, index }) =>
              <View style={[index % 2 == 0 ? Common.backgroundLight : Common.backgroundGrey]}>
                <View style={Layout.flatListContainer}>
                  <View style={Layout.flatListRow}>
                    <Text style={Fonts.textHeader}>TOOL</Text>
                    <Text style={[Fonts.textFont12]}>{item.toolboxname}</Text>
                    <Text style={[Fonts.textHeader, Gutters.smallTPadding]}>TYPE</Text>
                    <Text style={[Fonts.textFont12]}>{item.type}</Text>
                  </View>
                  <View style={Layout.flatListRow}>
                    <Text style={[Fonts.textHeader, Fonts.textRight]}>EQ NO</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.eqNumber}</Text>
                    <Text style={[Fonts.textHeader, Fonts.textRight, , Gutters.smallTPadding]}>STATUS</Text>
                    <Text style={[Fonts.textFont12, Fonts.textRight]}>{item.status}</Text>
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
              </View>
            }
          />
        </View>
        <View style={[Layout.row]}>
          <View style={[Layout.halfWidth]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
              Cancel
          </Button>
          </View>
          <View style={[Layout.halfWidth]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Common.button.createToolBoxButton]} labelStyle={{ color: Colors.grey }}>
              Save Tool Box
          </Button>
          </View>
        </View>
      </View>

    </>

  );
};
export default IndexCreateToolBoxContainer;