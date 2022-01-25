import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, } from 'react-native';
import { Icon } from 'react-native-elements';



export default function SingleObjectif(props) {


    return (
        <TouchableOpacity style={styles.objectif} onPress={() => props.props.navigation.navigate('ObjectifDetails', props.objectif)}>
            <View style={styles.checkbox}>{props.objectif.isDone == true ? <Icon size={12} name="check" type='font-awesome-5' color="#000" /> : null}</View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>{props.objectif.name}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    objectif: {
        borderWidth: 2,
        borderColor: "#f1c232",
        borderRadius: 20,
        padding: 20,
        width: "85%",
        marginTop: 25,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },

    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        marginRight: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    }

});