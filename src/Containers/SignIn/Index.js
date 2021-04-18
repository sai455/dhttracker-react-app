import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    View,
    Text
} from 'react-native'
import { Button, TextInput } from 'react-native-paper';
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'



const IndexSigninContainer = ({ navigation })  => {

    const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
    const dispatch = useDispatch()
    const [userName, setText] = React.useState('');
    const [password, setPassword] = React.useState("");
    return (
        <>
            <View style={[Layout.fill, Gutters.smallTMargin, Gutters.smallHPadding]}>
                <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
                    <Brand />
                    <Text style={[Fonts.titleSmall, Gutters.smallTMargin]}>DHT Tracker</Text>
                    <Text style={[Fonts.textSmall, Fonts.textlight, Gutters.largeTMargin]}>Proceed with your</Text>
                    <Text style={[Fonts.titleSmall, Gutters.smallTMargin]}>Login</Text>
                </View>
                <View style={[Layout.fullWidth, Gutters.smallHPadding, Gutters.largeTMargin]}>
                    <TextInput
                        mode='outlined' label='User Name'
                        placeholder="User Name" value={userName}
                        onChangeText={u => setText(u)}
                    />
                    <TextInput
                        mode='outlined' label='Password' secureTextEntry={true}
                        placeholder="Password" value={password}
                        onChangeText={p => setPassword(p) } style={[Gutters.smallTMargin]}
                    />
                    <Button mode="contained" raised theme={{ roundness: 3 }}  uppercase={false}
                        onPress={() => navigation.navigate('HomePage')} labelStyle={{color: Colors.grey}}
                        style={[Gutters.smallTMargin, Common.button.loginButton]}>
                        Sign In
                </Button>
                </View>
            </View>
        </>
    )
}
export default IndexSigninContainer