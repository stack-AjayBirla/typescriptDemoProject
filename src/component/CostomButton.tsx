import React from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";


const CostomButton:React.FC=(props:any)=>{


    const{title,buttonText,style,onpress}=props
    return(
        <View>
            <TouchableOpacity style={[styles.container,style]} onPress={onpress}>
            <Text style={[styles.buttonText,buttonText]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
height:50,
backgroundColor:'black',
justifyContent:'center',
alignItems:'center',
marginHorizontal:'25%',
marginVertical:10
    },
    buttonText:{
        fontSize:18,
        color:'white'
    }
})
export default CostomButton;