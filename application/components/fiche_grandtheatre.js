import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Picker } from 'react-native'



class fiche_grandtheatre extends React.Component {
    constructor(props) {
        super (props);
        this.state= {
            pickerSelection : null
        }
        this.location = [
            {label : "Choisisseqz'rey(strudytykre lieu", key:1},
            {label : "Gra'rqye(tsurje(tkr'héatre", key:2},
            {label : "Plazqtsey(ruj", key:3},
            {label : "Placezr'qyetsuryjdute", key:4}

        ]
    }
  render() {
    return (
        <View style={styles.container}>
            <Text>
                {this.props.location.city}
            </Text>
            <Text>
                {this.props.location.zipcode}
            </Text>

         </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1 
     },

     adresse_container: {
         width: '100%',
         height: '55%',
         alignItems: 'center',
         marginTop: '15%'
     },

     txt_adresse: {
         color: "white",
         marginTop: '5%',
         marginBottom: 25,
         fontSize: 25
     },

     code_ville_rue: {
         textAlign: 'center',
         borderColor: 'white',
         borderWidth: 1,
         width: '70%',
         height: '14%',
         marginBottom: 22,
         fontSize: 15,
         backgroundColor: "white",
         opacity: 0.6
     },

     container_num_compl: {
         width: '70%',
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'space-between'
     },
  
     num_compl: {
         borderColor: 'white',
         borderWidth: 1,
         width: '47%',
         textAlign: 'center',
         backgroundColor: "white",
         opacity: 0.6
     },
  
     container_rechercher: {
         width: '100%',
         alignItems: 'center'
     },
  
     container_add: {
         marginTop: '15%',
         width: '70%',
         marginLeft: '15%'
     },
  });
  

export default fiche_grandtheatre
