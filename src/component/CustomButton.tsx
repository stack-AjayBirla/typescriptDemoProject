import React, {FC} from 'react';
import {ViewStyle} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
} from 'react-native';

interface Props {
  title: string;
  buttonText?: TextStyle;
  style?: ViewStyle;
  onpress?: () => void;
}

const CustomButton: FC<Props> = ({title, buttonText, style, onpress}) => {
  return (
    <View>
      <TouchableOpacity style={[styles.container, style]} onPress={onpress}>
        <Text style={[styles.buttonText, buttonText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '25%',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});
export default CustomButton;
