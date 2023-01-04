import React from "react";
import { View,Text } from "react-native";
import CostomInput from "./src/component/CostomInput";

const App:React.FC=()=>{
  return(
    <View>
      <Text>app screen </Text>
      <CostomInput title={'please enter your name'}/>
    </View>
  )
}
export default App;
