import React from "react";
import { View,Text,TouchableOpacity,StyleSheet } from "react-native";


const CostomButton:React.FC=(props:any)=>{

    const{title,buttonText,style}=props
    return(
        <View>
            <TouchableOpacity style={[styles.container,style]}>
            <Text style={[styles.buttonText,buttonText]}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
flex:1
    },
    buttonText:{
        fontSize:18
    }
})
export default CostomButton;