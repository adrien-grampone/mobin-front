import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Modal,
    SafeAreaView,
    Dimensions,
    Alert
} from "react-native";
import { connect } from 'react-redux';
import getData from './functionGetData';
import axios from 'axios';


const windowHeight = Dimensions.get('window').height;



function ConnexionScreen(props) {
    const [email, setEmail] = useState("user1@user.fr");
    const [password, setPassword] = useState("user1");
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
        setModalVisible(false);
    }

    function login(email, password) {
        axios.post("https://improveyourself-api.azurewebsites.net/api/auth/login?email="+email+"&password="+password)
        .then((response) => {
          getData(props,true, response.data);    
          console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
          Alert.alert(
            "Erreur",
            "Impossible de se connecter, merci de réessayer."
          )
        });
    }

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/logo.png")} />
            <View style={styles.inputView}>
                <TextInput
                    label="Nom d'utilisateur"
                    style={styles.TextInput}
                    onChangeText={(email) => setEmail(email)}
                    value={email}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    label="Mot de passe"
                    style={styles.TextInput}
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    value={password}
                />
            </View>

            <TouchableOpacity //onPress={forgotPassword}
            >
                <Text style={styles.forgot_button}>Mot de passe oublié ?</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => login(email, password)}>
                <Text style={styles.loginText}>Connexion</Text>
            </TouchableOpacity>
            <Modal style={styles.modal}
                animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <SafeAreaView>
                    <View style={styles.centeredView}>
                        <View style={styles.closeModal}>
                            <Text onPress={closeModal}
                                style={styles.btnCloseModal}>x</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </View>
    );
}


const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    visites : state.visite
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      dispatch: (action) => { dispatch(action) }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(ConnexionScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
        width: "40%",
        height: 150
    },

    inputView: {
        width: "85%",
        height: 65,
        marginBottom: 20,
        alignItems: "flex-start",
        backgroundColor: "#292B36",
        borderRadius: 15
    },

    TextInput: {
        flex: 1,
        color: "#fff",
        width: "100%",
        paddingLeft: 15
    },

    text: {
        flex: 1,
        color: "#fff",
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#000",
        fontSize: 14,
        fontWeight: "600"
    },

    loginBtn: {
        width: "75%",
        borderRadius: 25,
        height: 55,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        backgroundColor: "#2b78e4",
    },

    loginText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#fff"
    },

    signInBtn: {
        height: 70,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff"
    },

    signInText: {
        color: "#fff"
    },

    imageProfil: {
        width: 30,
        height: 30,
        borderRadius: 30,
        borderWidth: 1,
        marginRight: 20
    },
    centeredView: {
        marginTop: (windowHeight - 400) / 2,
        justifyContent: "center",
        alignItems: "center",
        position: "relative",

    },

    closeModal: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "yellow",
        borderRadius: 100,
        width: 35,
        height: 35,
        position: "absolute",
        left: 0,
        top: 0,
        marginLeft: 30,
        marginTop: 10,
        zIndex: 3
    },

    btnCloseModal: {
        fontSize: 30,
        color: "#000",
    },

    modal: {
        position: "relative",
    },
});
