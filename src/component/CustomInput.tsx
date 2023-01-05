import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput, ViewStyle} from 'react-native';

interface Props {
  placeholder: string;
  title: string;
  secureTextEntry: boolean;
  onChangeText: (text: string) => void;
  keyboardtype: any;
  style: ViewStyle;
}

const CustomInput: FC<Props> = ({
  placeholder,
  title,
  secureTextEntry,
  onChangeText,
  keyboardtype,
  style,
}) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardtype}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderWidth: 1,
    margin: 5,
  },
  inputTitle: {
    fontSize: 18,
    margin: 5,
    color: 'black',
    fontWeight: '500',
  },
});
export default CustomInput;
