import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'react-native-elements';



export default function SingleTheme(props){

    return(
        
        <TouchableOpacity style={[props.themeActive == props.theme._id ? {backgroundColor:props.theme.color, padding:10, position:"relative", borderRadius:10, display:"flex", flexDirection:"row-reverse", alignItems:"center",justifyContent:"center"} : styles.theme]} onPress={() => props.filterModules(props.theme._id)}>
            {
                props.themeActive == props.theme._id &&
                (
                    <View style={styles.removeFilter}><Icon size={12} name='times' type='font-awesome' color="#000" /></View>
                )
            }
            <Text style={[props.themeActive == props.theme._id ? {color:"#fff", fontWeight:"700", textAlign:"center", fontSize:12} : {color:props.theme.color, fontWeight:"600", textAlign:"center", fontSize:12,  overflow: "hidden"}]}>{props.theme.name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    theme:{
        display:"flex", 
        alignItems:"center",
        justifyContent:"center"
    },
    removeFilter:{
        backgroundColor:"#fff", 
        borderRadius:50, 
        width:15, 
        height:15, 
        display:"flex", 
        alignItems:"center", 
        justifyContent:"center", 
        marginLeft:5,
    }
});


