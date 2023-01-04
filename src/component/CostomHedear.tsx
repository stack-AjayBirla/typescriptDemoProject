import React, { FC }  from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";



interface Props {
title:string;
containerstyle:string
titleTextstyle:string
imageurl:any
}

const CostomHedear:FC<Props> =(props:any)=>{
    const{title,containerstyle,titleTextstyle,imageurl}=props;
    return(
        <View style={[styles.container,containerstyle]}>
            <Text style={[styles.titleText,titleTextstyle]}>{title}</Text>
        <Image source={imageurl}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
      backgroundColor:'red',
      alignItems:'center'  
    },
    titleText:{
        color:'blue',
        fontSize:18,
        fontWeight:'500'
    }
})


export default CostomHedear;