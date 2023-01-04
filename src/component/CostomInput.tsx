import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

const CostomInput = (props: any) => {

    
    const { title = 'please enter', style, onChageText, secureTextEntry = false, keyboardtype } = props;
    
    
    let placeholder:any
    let onChangeText:(event: React.ChangeEvent<HTMLInputElement>) => void;
    let keyboardType:any
   
    
    return (
        <View>
            <TextInput
                placeholder={title}
                style={[styles.input, style]}
                onChangeText={onChageText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardtype}
            />
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