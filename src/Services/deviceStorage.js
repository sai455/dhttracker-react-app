import { AsyncStorage } from '@react-native-async-storage/async-storage';


const deviceStorage = {
    async saveItem(key, value) {
        try {
            console.log(value);
            await AsyncStorage.setItem(key, value);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
    },
    async getItem(key) {
        try {
            await AsyncStorage.getItem(key);
        } catch (error) {
            console.log('AsyncStorage Error: ' + error.message);
        }
       
    },
    async refreshToken()
    {

    }
};

export default deviceStorage;