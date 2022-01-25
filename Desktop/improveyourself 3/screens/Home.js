import React, { useEffect, useState, } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
    RefreshControl
} from "react-native";
import { connect } from 'react-redux';
import SingleTheme from "../components/singleTheme";
import SingleModule from '../components/singleModule';
import { Icon } from 'react-native-elements';
import getData from '../components/functionGetData';

function Home(props) {

    const [themeActive, setThemeActive] = useState();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity style={styles.btnObjectifs} onPress={() => props.navigation.navigate('Objectifs')}>
                  <Text style={{ fontSize: 22 }}>{props.data.login.data.objectifs.filter(objectif => objectif.isDone == true).length}</Text>
                </TouchableOpacity>
            ),
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => props.navigation.navigate('Settings')}>
                    <Icon size={25} name="user-circle" type='font-awesome-5' color="#000" />
                </TouchableOpacity>
            ),
            headerTitle: () => (
                <Image style={styles.image} source={require("../assets/logo.png")} />
            ),
            headerStyle: {
                height: 165
            }
        });
    }, [props.navigation]);

    const filterModules = (idTheme) => {
        if (themeActive == idTheme) {
            setThemeActive();
        }
        else {
            setThemeActive(idTheme);
        }
    }

    const _onRefresh = () => {
        setRefreshing(true);
        getData(props,false);
        setRefreshing(false);
    }

    const createError = () =>{
        throw new Error("Erreur créée volontairement !");
    }


    return (
        <View style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={_onRefresh}
                    />}>
                <View style={styles.filtres}>
                    {props.data.login.data.themes.map((item) => {
                        return (
                            <SingleTheme themeActive={themeActive} key={item._id} theme={item} filterModules={filterModules}></SingleTheme>
                        )
                    })
                }
                </View>
                <View style={styles.modules}>
                    <View style={{ width: "90%" }}>
                        {props.data.login.data.modules.map((item) => {
                            return (
                                <View key={item._id} style={{display: themeActive != null && themeActive != item.idTheme ? 'none' : 'flex'}}>
                                    <SingleModule themeActive={themeActive} props={props} key={item._id} module={item}></SingleModule>
                                </View>
                            )
                        })
                    }
                    </View>
                    <TouchableOpacity style={{backgroundColor:"red", width:"90%", borderRadius:"20", padding:10, display:"flex", justifyContent:"center", alignItems:"center", marginTop:50}} onPress={createError}>
                  <Text style={{ fontSize: 22, color:"#fff", fontWeight:"700" }}>Créer une erreur</Text>
                </TouchableOpacity>
                </View>
               
            </ScrollView>
        </View>
    );
}

const mapStateToProps = state => ({
    data: state,
});

export default connect(mapStateToProps)(Home);


const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#f6f6f6",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    image: {
        width: 100,
        height: 100,
        marginBottom:20
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
    filtres: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingBottom:0,
        marginLeft:20, 
        marginRight:20,
        marginTop:20
    },

    modules: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingBottom:40
    }
});
