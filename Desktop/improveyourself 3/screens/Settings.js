import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SafeAreaView,
    ScrollView
} from "react-native";
import { connect } from 'react-redux';


function Settings(props) {

    useEffect(() => {
        props.navigation.setOptions({
            title: 'Mon espace',
            headerBackTitleVisible: false
        });
    }, [props.navigation]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.card}>
                    <Text>Mon abonnement : Basique</Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Offres')}>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#000" }}>Changer de plan ?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <TouchableOpacity style={styles.btnLogout} onPress={() => props.navigation.replace('Connexion')}>
                        <Text style={{ fontSize: 18, fontWeight: "500", color: "#fff" }}>Se déconnecter</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps)(Settings);



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        position: "relative",
        height: 100
    },
    image: {
        width: 100,
        height: 100,
    },
    btnObjectifs: {
        borderWidth: 3,
        borderColor: "#f1c232",
        borderRadius: 500,
        width: 38,
        height: 38,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 15,
    },

    btnLogout: {
        width: "75%",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "red",

    }, 
    card:{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: 80,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.15,
        shadowRadius: 16.00,
        elevation: 24,
        backgroundColor: "#f6f6f6",
    }

});
