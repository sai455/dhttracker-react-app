import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AzureAuth from 'react-native-azure-auth';

import { navigateAndSimpleReset } from '@/Navigators/Root'
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import axios from 'axios'

const azureAuth = new AzureAuth({
  tenant: 'aca6f183-7909-4124-9119-f4b077335a34',
  clientId: '7323d38e-feb1-4df8-8d34-2892077fda67',
});
const options = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
};

export default class IndexSigninContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { accessToken: null, user: '', mails: [], userId: '' };
   

  }
  _onLogin = async () => {
    try {
     
      let tokens = await azureAuth.webAuth.authorize(
        {
          scope: 'openid profile User.Read email',
        })

      this.setState({ accessToken: tokens.accessToken });
     

      //Enable This once we have interceptor working 
      // await AsyncStorage.setItem("Idtoken", tokens.rawIdToken);
      //   console.log(tokens.rawIdToken);

      // axios.get('http://192.168.0.39/DownholeToolsApi/api/downholetools/user',{headers : {
      //   'Authorization': `Bearer ${tokens.rawIdToken}`
      // }})
      // .then(function (response) {
      //   console.log(response.data);
      // })
      // .catch(function (error) {
      //   console.log('Errrr'+error);
      // })



      navigateAndSimpleReset('HomePage');
    } catch (error) {
      console.log('Error during Azure operation', error)
    }
  };

  _onLogout = () => {
    azureAuth.webAuth
      .clearSession()
      .then(success => {
        this.setState({ accessToken: null, user: null });
      })
      .catch(error => console.log(error));
  };

  render() {
    let loggedIn = this.state.accessToken ? true : false;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Azure Auth - Login</Text>
          <Text style={styles.text}>Hello {this.state.user}!</Text>
          <Text style={styles.text}>
            You are {loggedIn ? '' : 'not '}logged in.
            </Text>
        </View>
        <View style={styles.buttons}>
          <Button
            style={styles.button}
            onPress={loggedIn ? this._onLogout : this._onLogin}
            title={loggedIn ? 'Log Out' : 'Log In'}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  header: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  text: {
    textAlign: 'center'
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'baseline',
    padding: 20
  },
  button: {
    flex: 1,
    padding: 20,
    margin: 20
  },
  list: {
    flex: 5,
    margin: 20
  }
});
