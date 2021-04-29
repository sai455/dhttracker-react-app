import React,{useState} from 'react';
import { Text, View } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button } from 'react-native-paper';

import { useTheme } from '@/Theme';

const IndexBarCodeToolContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  
  const [selectedTool, setselectedTool] = useState({});

  //setselectedTool({'description':'Tool 2345'})

  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Search for a Tool" subtitle="Scan Barcode" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
        <Card>
          <Card.Content style={[Common.backgroundGrey]}>
            <Text style={Fonts.textSmallBold}>Manage Tools</Text>
            
            <View style={[Layout.row,Gutters.largeTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Description: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>Tool GH123LMN </Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Equipment Number: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>123487876788</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>TOT: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>T12345RT</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Material Number: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>345678543333</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Category</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>Motor</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Country</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>Saudi Arabia</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Status: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>Keep in Country</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Toolbox: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>None</Text>
                </View>
            </View>
            
            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                      icon="printer"
                      onPress={() => navigation.navigate('ToolsLookupPage')}
                      style={[Gutters.smallTMargin, Gutters.smallRMargin,Fonts.borderGrey]}>
                      Print Barcode
                  </Button>
                </View>
                <View style={[Layout.halfWidth]}>
                <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                      icon="pencil-outline"
                      onPress={() => navigation.navigate('EditToolsPage')}
                      style={[Gutters.smallTMargin,Gutters.smallLMargin ,Fonts.borderGrey]}>
                      Edit Properties
                  </Button>
                </View>
            </View>
          </Card.Content>
        </Card>

        <Card style={[Gutters.smallTMargin]}>
          <Card.Content style={[Common.backgroundGrey]}>
            <Text style={Fonts.textSmallBold}>Performance maintainance</Text>
            
            <View style={[Layout.row,Gutters.largeTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Maintainence Status:</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>Not Maintained</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Last Maintainence</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>8/30/2020</Text>
                </View>
            </View>

            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Layout.halfWidth]}>
                  <Text style={Fonts.textHeader}>Performed By:</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                    <Text style={Fonts.text13}>76865745678765</Text>
                </View>
            </View>
            
            <View style={[Layout.row,Gutters.smallTMargin]}>
                <View style={[Gutters.largeLMargin]}>
                  <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
                      icon="printer"
                      
                      onPress={() => navigation.navigate('AddMaintainencePage')}
                      style={[Gutters.smallTMargin, Gutters.smallRMargin,Fonts.borderGrey]}>
                      Add Performance Maintainence
                  </Button>
                </View>
                
            </View>
          </Card.Content>
        </Card>

      </View>

    </>

  );
};
export default IndexBarCodeToolContainer;