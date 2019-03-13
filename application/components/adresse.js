import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'

class Adresse extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <View style={styles.logo_container}></View>
            <View style={styles.adresse_container}>
                <Text style={styles.txt_adresse}>Entrez l'adresse</Text>
                <TextInput style={styles.code_p} placeholder="Code Postale"></TextInput>
                <TextInput style={styles.ville} placeholder="Ville"></TextInput>
                <TextInput style={styles.rue} placeholder="Rue"></TextInput>
                <View styles={styles.num_compl}>
                    <TextInput style={styles.num} placeholder="N°"></TextInput>
                    <TextInput style={styles.complement} placeholder="Complément"></TextInput>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#E69B5D'
    },

    logo_container: {
        marginTop: 25, 
        marginLeft: 10, 
        width: '30%',
        height: '20%',
        backgroundColor: 'grey'
    },

    logo: {
  
    },
    adresse_container: {
        backgroundColor: 'red',
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },

    txt_adresse: {
        marginTop: '5%',
        marginBottom: 15,
        fontSize: 25
    },
  
    code_p: {
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
  
    ville: {
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },
  
    rue: {
        textAlign: 'center',
        borderColor: 'black',
        borderWidth: 1,
        width: '70%',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 20
    },

    num_compl: {
        borderColor: 'black',
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        width: '70%',
    },
  
    num: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%'
  
    },
  
    complement: {
        borderColor: 'black',
        borderWidth: 1,
        width: '30%'
  
    },
  
    rechercher: {
  
    },
  
    add: {
  
    },
  });
  

export default Adresse
