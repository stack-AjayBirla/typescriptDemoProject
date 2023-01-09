import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import CustomButton from '../component/CustomButton';
import CustomHedear from '../component/CustomHedear';
import CustomInput from '../component/CustomInput';
import {stackParam} from '../navigation/AppNavigator';
import {storeData} from './Storage';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: () => void;
  onPress?: (() => void) | undefined;
}

// interface IUser {
//   userId: string;
//   userPassword: string;
//   username: string;
// }

type singUpnavigationType = NativeStackNavigationProp<stackParam, 'SignUp'>;

const SignUp: React.FC<Props> = () => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [name, setName] = useState<string>('');
  const Navigation = useNavigation<singUpnavigationType>();

  const _handleSignUp = () => {
    if (email === '' || password === '' || name === '') {
      Alert.alert('please fill field');
    } else {
      let user = [password, name, email];

      storeData('user_data', JSON.stringify(user));
      Navigation.navigate('Home');
      console.log('user', user);
    }
  };
  return (
    <View style={styles.container}>
      <CustomHedear title="SignUp" />

      <CustomInput
        title="Name"
        placeholder="please enter name"
        onChangeText={text => setName(text)}
      />
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
      <CustomButton title="SignUp" onpress={() => _handleSignUp()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default SignUp;
