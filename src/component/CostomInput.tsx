import React, { FC } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

interface Props {
    placeholder: string;

title:string;
secureTextEntry:boolean;
onChangeText: (text: string) => void
keyboardtype:any;
style:any
}

const CostomInput:FC<Props> = (props) => {
    const { title = 'please enter', style, onChangeText, secureTextEntry = false, keyboardtype } = props;

    return (
        <View>
            <TextInput
                placeholder={title}
                style={[styles.input, style]}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardtype}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 1
    }
})
export default CostomInput;