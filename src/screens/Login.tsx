import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import CustomButton from '../component/CustomButton';
import CustomHedear from '../component/CustomHedear';
import CustomInput from '../component/CustomInput';
import {stackParam} from '../navigation/AppNavigator';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: () => void;
}

interface IUser {
  userId: string;
  userPassword: string;
}
type loginnavigationType = NativeStackNavigationProp<stackParam, 'SignUp'>;

const Login: React.FC<Props> = () => {
  const [email, setEmail] = useState<string | null>();
  const [password, setPassword] = useState<string | null>();
  const Navigation = useNavigation<loginnavigationType>();

  const _handleLogin = () => {
    if (email === '' && password === '') {
      Alert.alert('please fill ');
    } else {
      Alert.alert('empty');
      Navigation.navigate('SignUp');
    }
  };
  return (
    <View style={styles.container}>
      <CustomHedear title="LOGIN" />
      <CustomInput
        title="Email"
        placeholder="please enter Email"
        onChangeText={text => setEmail(text)}
      />
      <CustomInput
        title="Password"
        placeholder="please enter password"
        onChangeText={text => setPassword(text)}
      />
      <CustomButton title="LOGIN" onpress={() => _handleLogin()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default Login;
function storeData(_arg0: string, _arg1: string) {
  throw new Error('Function not implemented.');
}
