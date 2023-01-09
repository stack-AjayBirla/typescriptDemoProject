import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {getData} from '../Storage';

// interface Res {
//   response;
// }

const Home: React.FC = () => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    getData('user_data').then(response => {
      let myData = JSON.parse(response);
      console.log('data', myData);
      setUserData(myData);
    });
  }, []);
  return (
    <View>
      <Text>{userData}</Text>
    </View>
  );
};

export default Home;
