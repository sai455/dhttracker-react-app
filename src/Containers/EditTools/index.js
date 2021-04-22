import React from 'react';
import { ScrollView, View } from 'react-native';
import { Text, Appbar, TextInput, Card, Button,Colors as PapperColors, Checkbox } from 'react-native-paper';
import { useTheme } from '@/Theme';
import { DropDown } from '@/Components';

const IndexEditToolContainer = ({ navigation }) => {
  const _goBack = () => navigation.navigation.goBack(null);
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme();
  const [tool, setTool] = React.useState({
    id: 7, materialNo: '201', category: 'category2',
    eqNo: '10235521101023', tot: 'TOT1', country: 'USA', description: 'desjbnj4576'
  });

  const setCategory = (option) => {
    //settopThread(option.label);
  };

  const [checked, setChecked] = React.useState(false);

  const setCountry = (option) => {
    //settopThread(option.label);
  };

  const countryList = [
    { label: 'USA', value: 'USA' },
    { label: 'UK', value: 'uk' },
    { label: 'France', value: 'france' }
  ];

  const categoryList = [
    { label: 'category1', value: 'category1' },
    { label: 'category2', value: 'category2' },
    { label: 'category3', value: 'category3' }
  ];
  return (
    <>
      <Appbar.Header >
        <Appbar.BackAction onPress={() => navigation.navigate('HomePage')} color={Colors.white} />
        <Appbar.Content title="Manage Tool Boxes" color={Colors.white} />
      </Appbar.Header>
      <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
        <ScrollView>
          <Card>
            <Card.Content style={[Common.backgroundGrey]}>
              <Text style={Fonts.textSmallBold}>Manage Tools</Text>
              <View style={[Layout.row, Gutters.largeTMargin]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>Description: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <TextInput
                    mode='flat'
                    value={tool.description}
                    onChangeText={text => console.log(text)}
                  />
                </View>
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>Equipment Number: </Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <TextInput
                    mode='flat'
                    value={tool.eqNo}
                    onChangeText={text => console.log(text)}
                  />
                </View>
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>TOT:</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <TextInput
                    mode='flat'
                    value={tool.tot}
                    onChangeText={text => console.log(text)}
                  />
                </View>
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>Material Number:</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <TextInput
                    mode='flat'
                    value={tool.materialNo}
                    onChangeText={text => console.log(text)}
                  />
                </View>
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>Category</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <DropDown list={categoryList} setData={setCategory} defaultValue={tool.category}
                    containerStyle={{ height: 45 }} placeholder={'Select Category'}
                    searchablePlaceholder={'Search Category'}></DropDown>
                </View>
              </View>

              <View style={[Layout.row]}>
                <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                  <Text style={Fonts.textHeader}>Category</Text>
                </View>
                <View style={[Layout.halfWidth]}>
                  <DropDown list={countryList} setData={setCategory} defaultValue={tool.country}
                    containerStyle={{ height: 45 }} placeholder={'Select Category'}
                    searchablePlaceholder={'Search Category'}></DropDown>
                </View>
              </View>

              <View style={[Layout.row, Fonts.textCenter]}>
                <Text>Note: Changing the Country will remove the Toolbox Association</Text>
              </View>

              <View style={[Layout.column, Common.backgroundGrey]}>
                <View style={Layout.row}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color='grey'
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={[Gutters.smallTMargin]}>Available for out-of-country Redployment?</Text>
                </View>
              </View>

              <View style={{ borderTop: '1px' }}>
                <View style={[Layout.row]}>
                  <View style={[Layout.halfWidth, Gutters.largeVMargin]}>
                    <Text style={Fonts.textHeader}>Toolbox(optional)</Text>
                  </View>
                  <View style={[Layout.halfWidth]}>
                    <TextInput
                      mode='flat'
                      value={tool.materialNo}
                      onChangeText={text => console.log(text)}
                    />
                  </View>
                </View>
              </View>

              <View style={[Layout.column, Common.backgroundGrey]}>
                <View style={Layout.row}>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    color='grey'
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
                  <Text style={[Gutters.smallTMargin]}>Tool Currently in use?</Text>
                </View>
              </View>

              <View>
                <TextInput
                  mode='flat'
                  value={tool.materialNo}
                  placeholder="Enter Sales Order Number"
                  onChangeText={text => console.log(text)}
                />
              </View>


            </Card.Content>
          </Card>
        </ScrollView>

        <View>
          <View style={[Layout.row]}>
            <View style={[Layout.halfWidth,Gutters.smallRMargin]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Common.button.loginButton]} labelStyle={{ color: Colors.grey }}>
              Cancel
              </Button>
            </View>
            <View style={[Layout.halfWidth,Gutters.smallRPadding]}>
            <Button mode="contained" raised theme={{ roundness: 5 }} uppercase={false}
              style={[Common.button.loginButton]} labelStyle={{ color: Colors.grey }}>
              Save Changes
              </Button>
            </View>
            
          </View>
        </View>
      </View>



    </>

  );
};
export default IndexEditToolContainer;