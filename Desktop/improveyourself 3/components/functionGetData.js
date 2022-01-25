import axios from 'axios';

export default function getData(props,redirection, token) {

    axios.get("https://improveyourself-api.azurewebsites.net/api/improveyourself/getAll", {
        "headers": {
            'Content-Type': 'application/json',
          }
    })
    .then((response) => {
        let themes = response.data
        axios.get("https://improveyourself-api.azurewebsites.net/api/improveyourself/getAllModules", {
            "headers": {
                'Content-Type': 'application/json',
              }
        })
        .then((responseModules) => {
            let modules =responseModules.data;
            axios.get("https://improveyourself-api.azurewebsites.net/api/improveyourself/getAllObjectifs", {
            "headers": {
                'Content-Type': 'application/json',
              }
        })
        .then((responseObj) => {
            const action = { type: "LOGIN_USER", themes: themes, modules: modules, objectifs: responseObj.data, user: token}
            props.dispatch(action);
            if (redirection == true) {
                props.navigation.replace('Accueil');
            }
           
        }).catch((error) => { });
           
        }).catch((error) => { });
    }).catch((error) => {});

    

  

}