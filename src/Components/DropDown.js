import React,{ useState } from 'react'
import { View, Image } from 'react-native'
import { useTheme } from '../Theme';
import DropDownPicker from 'react-native-dropdown-picker';
import { Text   } from 'react-native';
import {TouchableOpacity} from 'react-native-paper';

const DropDown = (props) => {
  const { Layout, Gutters,Images } = useTheme()

  const [selectedCountry, setselectedCountry] = useState('');

  const onPressItem = (option)=>{
        props.setData(option)
  }

  return (
    <View style={[Gutters.smallLMargin ,Gutters.smallRMargin]}>
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
