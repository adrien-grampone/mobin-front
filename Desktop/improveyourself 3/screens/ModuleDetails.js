import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    SafeAreaView,
    Dimensions,
    ScrollView,
    useWindowDimensions
} from "react-native";
import HTML from 'react-native-render-html';


function ModuleDetails(props) {
    const contentWidth = useWindowDimensions().width;
    const [module, setModule] = useState(props.route.params);

    useEffect(() => {
        props.navigation.setOptions({
            title: module.name,
            headerBackTitle: 'Retour'
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={{backgroundColor:"#fff", height:"100%"}}>
            <ScrollView>
                <View style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", padding:20}}>
                    {/*<View style={{borderColor:module.color, borderWidth:1, padding:15, borderRadius:50, width:55, height:55, display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <Icon size={18} name={module.logo} type='font-awesome-5' color={module.color} />
                    </View>*/}
                    <Text style={{marginLeft:20, fontSize:20, color:module.color, fontWeight:"700"}}>{module.name}</Text>
                </View>
                <View style={{flex:1, marginRight:15, marginLeft:15}}>
                    <HTML source={{ html: module.content }} contentWidth={contentWidth} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ModuleDetails;



