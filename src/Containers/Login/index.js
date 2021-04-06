import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    View, SafeAreaView,
    ActivityIndicator,
    Text,
    TextInput,Button,
    TouchableOpacity,
} from 'react-native'
import { Brand } from '@/Components'
import { useTheme } from '@/Theme'

const [text, onChangeText] = React.useState("Useless Text");

const IndexLoginContainer = () => {
    const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
    const dispatch = useDispatch()
    return (
        <View style={[Layout.fill, Gutters.largeTMargin, Gutters.smallHPadding]}>
            <View style={[[Layout.colCenter, Gutters.smallHPadding]]}>
                <Brand />
                <Text style={[Fonts.titleSmall, Gutters.largeTMargin]}>DHT Tracker</Text>
                <Text style={[Fonts.textSmall, Fonts.textlight, Gutters.smallTMargin]}>Proceed with your</Text>
                <Text style={[Fonts.titleSmall]}>Login</Text>
            </View>
            <View style={[Layout.colCenter, Gutters.smallHPadding]}>
                <TextInput
                    placeholder="User Name" selectTextOnFocus  onChangeText={onChangeText}
                    value={text}
                    style={[Layout.fullWidth, Common.textInput]}
                />
                <TextInput
                    placeholder="Password" selectTextOnFocus
                    style={[Layout.fullWidth, Common.textInput]}
                />
            </View>
            <View style={[Layout.fullWidth,Layout.colCenter, Gutters.smallHPadding]}>
            <Button
                    title="Sign In" style={[Common.button.regularButton]}
                />
            </View>
        </View>
    )
}
export default IndexLoginContainer