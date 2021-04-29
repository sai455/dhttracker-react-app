import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Paragraph, Appbar, Subheading, TextInput, Colors as PapperColors, Button, DataTable } from 'react-native-paper';
import { useTheme } from '@/Theme';

import { DropDown } from '@/Components';

const IndexInventoryCheckContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const listData = [
    { description: '1575627256333344', status: 1 },
    { description: '15711567272', status: 2 },
    { description: '56272567272', status: 2 },
    { description: '272567272', status: 1 },
    { description: '272567272', status: 3 },
    { description: '172567272', status: 3 },
    { description: '2722567272', status: 1 },
    { description: '372567272', status: 3 },
    { description: '372567272', status: 3 },
    { description: '372567272', status: 3 },
    { description: '372567272', status: 3 },
    { description: '372567272', status: 3 },
    { description: '372567272', status: 3 },
    { description: '472567272', status: 1 }
  ];


  const setCountry = (option) => {
    setselectedCountry(option.label);
  };

  const renderElementText = (item) => {
    if (item.status == 1) {
      return <Text style={[Fonts.fontGreen]}>Scanned</Text>;
    } else if (item.status == 2) {
      return <Text style={[Fonts.fontRed]}>Not Scanned</Text>;
    } else if (item.status == 3) {
      return <Text style={[Fonts.fontBlue]}>New Tool</Text>;
    }

    return null;
  };


  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Inventory Check:ABC-0000" subtitle="Scan all tools in the toolbox to update" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallLMargin, Gutters.smallRMargin, Gutters.smallHPadding]}>
        <View style={[Gutters.smallTMargin]}>
          <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
            icon="barcode-scan"
            style={[Fonts.borderGrey]}>
            Scan Barcode
                  </Button>
        </View>

        <View style={[Gutters.largeTMargin]}>
          <Button mode="contained" style={[Gutters.largeTMargin]} raised theme={{ roundness: 5 }} uppercase={false}
            icon="printer"
            style={[Fonts.borderGrey]}>
            Print Barcode
                  </Button>
        </View>

        <View style={[Layout.fill, Gutters.largeTMargin, Gutters.xlargeBMargin]}>
          <DataTable>
            <DataTable.Header style={[Common.backgroundGrey, Fonts.textSmallBold]}>
              <DataTable.Title>Description</DataTable.Title>
              <DataTable.Title>Scanned Status</DataTable.Title>
              <DataTable.Title>Action</DataTable.Title>
            </DataTable.Header>
            <ScrollView>
              {
                listData && listData.length > 0 ?
                  listData.map((item, index) => {
                    return (
                      <DataTable.Row key={index} style={[index % 2 == 0 ? Common.backgroundLight : Common.backgroundGrey]}>
                        <DataTable.Cell><Text>{item.description}</Text></DataTable.Cell>
                        <DataTable.Cell>{renderElementText(item)}</DataTable.Cell>
                        <DataTable.Cell>
                          <Button icon="printer"
                            color={PapperColors.grey500}
                            mode="text"
                            style={[]}
                            onPress={() => console.log(item)}>
                          </Button></DataTable.Cell>
                      </DataTable.Row>
                    );
                  })
                  :
                  false
              }
            </ScrollView>
          </DataTable>
        </View>
        <View style={[Layout.row]}>
          <View style={[Layout.halfWidth]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Fonts.borderGrey]}>
              Save as Draft
                  </Button>
          </View>
          <View style={[Layout.halfWidth]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Fonts.borderGrey, Gutters.smallLMargin]}>
              Update Tool Box
                  </Button>
          </View>
        </View>
      </View>

    </>

  );
};
export default IndexInventoryCheckContainer;