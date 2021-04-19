import React,{ useState } from 'react'
import { View, Platform } from 'react-native'
import { useTheme } from '../Theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text   } from 'react-native';
import Layout from '../Theme/Layout';

const DropDown = (props) => {
  const {  Gutters,Layout } = useTheme()

  const [selectedCountry, setselectedCountry] = useState('');

  const onPressItem = (option)=>{
        props.setData(option)
  }

  return (
    <View style={{
      ...(Platform.OS !== 'android' && {
        zIndex: 10
          }),  
          width: '100%'
        }}>
      <DropDownPicker
            items={props.list}
            containerStyle={props.containerStyle}
            placeholder={props.placeholder}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={item => props.setData(item) }
            searchable={true}
            searchablePlaceholder={props.searchablePlaceholder}
            searchablePlaceholderTextColor="gray"
            seachableStyle={{}}
            searchableError={() => <Text>Not Found</Text>}
            onSearch={text => {
              
              // alert(text)
            }}
          />
          
    </View>
  )
}

export default DropDown
