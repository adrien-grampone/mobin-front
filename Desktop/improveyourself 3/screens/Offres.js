import React, { useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { connect } from 'react-redux';


function Offres(props) {

    useEffect(() => {
        props.navigation.setOptions({
            title: 'Plans',
        });
    }, [props.navigation]);

   
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ display: "flex", alignItems: "center", paddingBottom: 80 }}>
                    <TouchableOpacity style={[styles.card, { marginTop: 30 }]}>
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>Basique</Text>
                        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Prix (par mois) : 0€</Text>
                        </View>
                        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Détails de l'offre :</Text>
                            <Text style={{ fontSize: 14, marginTop: 10 }}>- Accès à 10 modules</Text>
                        </View>
                        <View style={styles.footerCard}>
                            <Text style={styles.btnChoose}>Actuel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, { paddingTop: 15 }, { marginTop: 30 }]} >
                        <Text style={{ fontSize: 20, fontWeight: "600" }}>Premium </Text>
                        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Prix (par mois) : 4,99€</Text>
                        </View>
                        <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ fontWeight: "600", fontSize: 16 }}>Détails de l'offre :</Text>
                            <Text style={{ fontSize: 14, marginTop: 10 }}>- Accès à l'ensemble des modules</Text>
                            <Text style={{ fontSize: 14, marginTop: 10 }}>- Accès aux objectifs</Text>
                        </View>
                        <View style={[styles.footerCard, { backgroundColor: "#5975AA" }]}>
                            <Text style={styles.btnChoose}>Activer</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.card, { paddingTop: 15 }, { marginTop: 40 }]} >
                        <View opacity={0.5} style={{display:"flex", alignItems:"center"}}>
                            <Text style={{ fontSize: 20, fontWeight: "600" }}>Avancé (indisponible)</Text>
                            <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Prix (par mois) : 299,99€</Text>
                            </View>
                            <View style={{ display: "flex", alignItems: "center", marginTop: 10 }}>
                                <Text style={{ fontWeight: "600", fontSize: 16 }}>Détails de l'offre :</Text>
                                <Text style={{ fontSize: 14, marginTop: 10 }}>- Accès à l'ensemble des modules</Text>
                                <Text style={{ fontSize: 14, marginTop: 10 }}>- Accès aux objectifs</Text>
                                <Text style={{ fontSize: 14, marginTop: 10 }}>- Coach personnalisé</Text>
                            </View>
                        </View>
                        <View style={[styles.footerCard, { backgroundColor: "#7073ec" }]}>
                            <View opacity={0.5}><Text style={styles.btnChoose}>Activer</Text></View>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    );
}


const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps)(Offres);



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
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
    card: {
        width: "80%",
        borderRadius: 15,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.20,
        shadowRadius: 16.00,
        elevation: 24,
        backgroundColor: "#f9f9f9",
        paddingTop: 10,
    },
    footerCard: {
        display: "flex",
        alignItems: "center",
        marginTop: 10,
        paddingBottom:15,
        width: "100%",
        paddingTop: 15,
        backgroundColor: "#5787E5",
        overflow: "hidden",
        borderRadius: 15,
        borderTopEndRadius: 0,
        borderTopStartRadius: 0,
    },
    btnChoose: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff",
        borderRadius: 5,
        padding: 10
    }

});
