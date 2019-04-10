import React from 'react';
import { StyleSheet, View, Text, Button, TextInput, ImageBackground, Picker } from 'react-native'



class fiche_victoire extends React.Component {
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
            <ImageBackground source={require("./img/background_arch.jpg")} style={{flex: 1, resizeMode: 'cover'}}>
                 <View style={styles.adresse_container}> 
                     <Text style={styles.txt_adresse}>Entrez l'adresse</Text>
                     <Picker
                        selectedValue={this.state.pickerSelection}
                        style={{height: 50, width: '70%', backgroundColor: 'white', marginBottom: 10}}
                        onValueChange={(itemValue) =>
                            this.setState({pickerSelection: itemValue})
                        }>
                        { this.location.map (({label, value, key}) => <Picker.Item key={key} label={label} value={value} />) }
                    </Picker> 


                    {/**************** La ligne suivante est retiré pour faire une liste déroulante qui renvoi vers nos sélection *********************/}
                     {/* <TextInput style={styles.code_ville_rue} placeholder="Code Postale" placeholderTextColor="black"></TextInput> */}
                     <TextInput style={styles.code_ville_rue} placeholder="Ville" placeholderTextColor="black"></TextInput>
                    <TextInput style={styles.code_ville_rue} placeholder="Rue" placeholderTextColor="black"></TextInput>
                    <View style={styles.container_num_compl}>
                        <TextInput style={styles.num_compl} placeholder="N°" placeholderTextColor="black"></TextInput>
                        <TextInput style={styles.num_compl} placeholder="Complément" placeholderTextColor="black"></TextInput>
                    </View> 
                 </View> 
                 <View style={styles.container_rechercher}>
                    <Button title="Rechercher" onPress={function() {}}></Button>
                </View>
                <View style={styles.container_add}>
                    <Button style={styles.add} title="Votre adresse n'existe pas ? Entrez la vous même" onPress={function() {}}></Button>
                </View> 
             </ImageBackground> 

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
  

export default fiche_victoire
