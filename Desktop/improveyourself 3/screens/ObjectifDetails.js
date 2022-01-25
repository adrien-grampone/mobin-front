import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    View,
} from "react-native";
import { Icon } from 'react-native-elements';



function ObjectifDetails(props) {
    const [objectif, setObjectif] = useState(props.route.params);

    useEffect(() => {
        props.navigation.setOptions({
            title: "Détails de l'objectif"
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{display:"flex", alignItems:"center", marginTop:20}}>
                    {
                        objectif.isDone == false &&
                        <View style={{borderWidth:1, width:"90%",padding:15}}>
                            <Icon style={{marginTop:10}} size={40} name="times" type='font-awesome-5' color="#ea9999" />
                            <Text style={{color:"#ea9999", fontSize:25, textAlign:"center", marginTop:20, fontWeight:"700"}}>Objectif non atteint 🥺</Text>
                            <Text style={{fontWeight:"700", fontSize:17, marginTop:20}}>{objectif.name}</Text>
                            <Text style={{fontSize:20, marginTop:20, fontWeight:"500"}}>{objectif.description}</Text>
                        </View>

                    }
                    {
                        objectif.isDone == true &&
                        <View style={{borderWidth:1, width:"90%",padding:15}}>
                            <Icon style={{marginTop:10}} size={40} name="check-circle" type='font-awesome-5' color="#009e0f" />
                            <Text style={{color:"#009e0f", fontSize:25, textAlign:"center", marginTop:20, fontWeight:"700"}}>Bravo 😇 ! Objectif atteint !</Text>
                            <Text style={{fontWeight:"700", fontSize:17, marginTop:20}}>{objectif.name}</Text>
                            <Text style={{fontSize:18, marginTop:20, fontWeight:"500"}}>{objectif.description}</Text>
                        </View>
                    }

                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ObjectifDetails;


const styles = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20
    },
    image: {
        width: 100,
        height: 100,
    },
});
