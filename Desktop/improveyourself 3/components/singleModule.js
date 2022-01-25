import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';



export default function SingleModule(props){

    if(props.module.idTheme == "6166ecda384ee9a962346638"){
        props.module.color = "#009e0f";
    }
    else if(props.module.idTheme == "6166ef5c89fbaf8b43b45ebb"){
        props.module.color = "#2b78e4";
    }
    else{
        props.module.color = "#ff9900";
    }
    return(
        <TouchableOpacity style={[styles.module, {borderWidth:2, borderRadius:15}, {borderColor:props.module.color}]} 
        onPress={() => props.props.navigation.navigate('ModuleDetails', props.module)}>
            <View style={{display:"flex", alignItems:"center",justifyContent:"center", width:"20%"}}>
                <Icon size={30} name={props.module.logo} type='font-awesome-5' color="#000" />
                </View>
            <View style={{width:"80%"}}>
                <Text style={{fontSize:21, fontWeight:"600"}}>{props.module.name}</Text>
                <Text style={{fontSize:16, marginTop:10}}>{props.module.excerpt}</Text>
            </View>
            
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    module:{
        padding:30,
        display:"flex", 
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        flexDirection:"row",
        paddingRight:10,
        paddingLeft:10,
        marginTop:15,
        backgroundColor:"#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 16.00,
        elevation: 24,
    }
   
});