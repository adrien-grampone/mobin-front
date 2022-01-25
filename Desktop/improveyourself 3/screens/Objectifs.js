import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    RefreshControl
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from 'react-redux';
import SingleObjectif from '../components/singleObjectif';
import getData from '../components/functionGetData';



function Objectifs(props) {
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        props.navigation.setOptions({
            headerBackTitle: 'Retour'
        });
    }, [props.navigation]);


    const _onRefresh = () => {
        setRefreshing(true);
        getData(props,false);
        setRefreshing(false);
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
             refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={_onRefresh}
                />}>
                <View style={styles.objectifs}>
                    <View>
                        <Text style={styles.titre}>Prochains objectifs à atteindre :</Text>
                        <View style={{ display: "flex", alignItems: "center" }}>
                            {props.data.login.data.objectifs.map((item) => {
                                return (
                                    item.isDone == false &&
                                    <SingleObjectif key={item._id} props={props} objectif={item}></SingleObjectif>
                                )
                            })
                            }
                        </View>
                    </View>
                    <View style={{ marginTop: 30 }}>
                        <Text style={styles.titre}>Mon nombre d'objectifs réalisés : {props.data.login.data.objectifs.filter(objectif => objectif.isDone == true).length}</Text>
                        <View style={{ display: "flex", alignItems: "center" }}>
                            {props.data.login.data.objectifs.map((item) => {
                                return (
                                    item.isDone == true &&
                                    <SingleObjectif key={item._id} props={props} objectif={item}></SingleObjectif>
                                )
                            })
                            }
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}


const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps)(Objectifs);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff"
    },
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

    objectifs: {
        display: "flex",
        marginTop: 30,
    },

    titre: {
        fontSize: 20,
        fontWeight: "600",
        paddingLeft: 25
    },
});
