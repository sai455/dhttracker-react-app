import React from 'react';
import { Text,View, FlatList, StyleSheet, ScrollView  } from 'react-native';
import { Appbar  } from 'react-native-paper';
import { Button, Searchbar, List ,DataTable   } from 'react-native-paper';

import { useTheme } from '@/Theme'

const IndexManageToolBoxesContainer = ({ navigation }) => {
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
      <Button mode="contained" icon="camera" raised theme={{ roundness: 5 }} uppercase={false}
          style={[Gutters.smallTMargin, Common.button.loginButton]}>
          Scan Barcode
       </Button>

       <View>
          <Text style={[Fonts.textSmall, Fonts.textCenter, Gutters.smallTMargin]}>OR</Text>
       </View>
      
      <View style={[ Gutters.smallTPadding]}>
          <Searchbar 
            placeholder="Search By Country"
            onChangeText={query => { console.log(query)  }}
          />
      </View>
    
   
      <View style={[ Layout.fill,Gutters.smallTMargin]}>
      <FlatList
        data={[
          {id:2,toolboxname: 'DEX',noofTools:23,status:'available',country:'Saudi'},
          {id:3,toolboxname: 'DEX',noofTools:23,status:'available',country:'Saudi'},
          {id:4,toolboxname: 'DEX',noofTools:23,status:'available',country:'Saudi'},
          {id:5,toolboxname: 'ABC',noofTools:3,status:'available',country:'Saudi'},
          {id:6,toolboxname: 'RES',noofTools:53,status:'available',country:'Saudi'},
          {id:7,toolboxname: 'MAN',noofTools:23,status:'available',country:'Saudi'},
          {id:8,toolboxname: 'MAN',noofTools:23,status:'available',country:'Saudi'},
          {id:10,toolboxname: 'ANT',noofTools:23,status:'available',country:'Saudi'},
          {id:1,toolboxname: 'KEM',noofTools:23,status:'available',country:'Saudi'}
          
       ]}
        renderItem={({item,index}) =>
        <View style={{ backgroundColor: colorsBack[index % colorsBack.length]}}>
          <View style={styles.container}>
              <View style={styles.item}>
                  <Text style={Fonts.textHeader}>TOOL BOX</Text>
                  <Text style={[Fonts.textFont12]}>{item.toolboxname}</Text>
                  <Text style={[Fonts.textHeader]}>STATUS</Text>
                  <Text style={[Fonts.textFont12]}>{item.status}</Text>
              </View>
              <View style={styles.item}>
              <Text style={[Fonts.textFlexRight]}>NO. OF TOOLS</Text>
              <Text style={[Fonts.textFlexRight,Fonts.textBlack,Fonts.textFont12]}>{item.noofTools}</Text>
              <Text style={[Fonts.textFlexRight]}>AVAILABLE</Text>
              <Text style={[Fonts.textFlexRight,Fonts.textBlack,Fonts.textFont12]}>{item.country}</Text>
              </View>
              <View style={styles.itemdelete}>
                <Button icon="delete">
                </Button>
              </View>
          </View>
        </View> 
         }
        />
      </View>
       
       <View style={[ Gutters.smallBMargin]}>
          <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[ Gutters.smallHPadding ,Common.button.createToolBoxButton]}>
            Create New Toolbox
          </Button>
       </View>
    </View>
    
    </>
    
  );
};
export default IndexManageToolBoxesContainer;