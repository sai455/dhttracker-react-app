import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Appbar, TextInput, DataTable, Card, Button, Colors as PapperColors } from 'react-native-paper';
import { useTheme } from '@/Theme';
import DatePicker from 'react-native-datepicker';



const IndexAssMaintainenceContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();

  const [date, setDate] = React.useState(undefined);
 
 

  const maintainceList = [
    { date: '31/10/2020', performedBy: 'Ravi', details: 'Full Service Tool Box' },
    { date: '01/02/2020', performedBy: 'Raju', details: 'Full Service Tool Box' },
    { date: '01/03/2020', performedBy: 'Ranga', details: 'Full Service Tool Box' },
    { date: '4/03/2020', performedBy: 'Ranga', details: 'Full Service Tool Box' },
    { date: '45/03/2020', performedBy: 'Ranga', details: 'Full Service Tool Box' },
    { date: '15/04/2020', performedBy: 'Ram', details: 'Full Service Tool Box' },
  ];
  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Search for a Tool" subtitle="Scan Barcode>Perform Mainatainence" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>

        <View style={[Gutters.largeTMargin, Gutters.smallLMargin, Common.backgroundLight]}>
          <View style={[Gutters.row]}>
            <Text>Equipment Number: <Text style={[Fonts.textSmallBold]}> 127303783637</Text></Text>
           </View>
          <DataTable style={[Gutters.smallTMargin]}>
            <DataTable.Header style={[Common.backgroundGrey,Fonts.textSmallBold]}>
              <DataTable.Title>Date (mm/dd/yyyy) </DataTable.Title>
              <DataTable.Title>Performed By</DataTable.Title>
              <DataTable.Title numberOfLines={1} style={{overflow: 'visible'}}>Details</DataTable.Title>
            </DataTable.Header>
            <ScrollView style={{ height: 250 }}>
              {
                maintainceList && maintainceList.length > 0 ?
                  maintainceList.map((item, index) => {
                    return (
                      <DataTable.Row key={index} style={[index % 2 == 0 ? Common.backgroundLight : Common.backgroundGrey]}>
                        <DataTable.Cell>{item.date}</DataTable.Cell>
                        <DataTable.Cell>{item.performedBy}</DataTable.Cell>
                        <DataTable.Cell style={[Fonts.textJustify]}>{item.details}</DataTable.Cell>
                      </DataTable.Row>
                    );
                  })
                  :
                  false
              }
            </ScrollView>
          </DataTable>
        </View>



        <View style={[Gutters.smallLMargin, Gutters.largeTMargin]}>
          <Card>
            <Card.Content style={[Common.backgroundGrey]}>
              <Text style={[Fonts.textSmallBold]}>
                Add Maintenece due
              </Text>
              <View style={[Layout.fullWidth, Gutters.smallTMargin]}>
                <DatePicker
                  style={[Layout.fullWidth]}
                  date={date}
                  mode="date"
                  placeholder="Select Date(yyyy-MM-DD)"
                  format="yyyy-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  showIcon='false'
                  customStyles={{
                    // dateIcon: {
                    //   position: 'absolute',
                    //   left: 0,
                    //   top: 4,
                    //   marginLeft: 0
                    // },
                    dateInput: {
                      height: 50
                    }

                    // ... You can check the source to find the other keys.
                  }}

                  onDateChange={(dategot) => { setDate(dategot) }}
                />
                <TextInput
                  mode='outlined' label='Details'
                  placeholder="Details"
                  style={[Gutters.smallTMargin]}
                />

                <Button mode="contained" raised theme={{ roundness: 3 }} uppercase={false}
                  labelStyle={{ color: Colors.grey }}
                  style={[Gutters.smallTMargin, Common.button.loginButton,Gutters.largeLMargin,,Gutters.largeRMargin]}>
                  Save
                </Button>
              </View>
            </Card.Content>
          </Card>

        </View>
      </View>



    </>

  );
};
export default IndexAssMaintainenceContainer;