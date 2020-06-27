import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Mercados = () => {
    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <Text style={styles.title}>
                    Selecione o Mercado
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 32,
        paddingTop: 32,
        backgroundColor: '#fff'
      },
    
      main: {
        justifyContent: "center",
      },

      logo: {
        marginLeft: 80,
        width: 150,
        height: 150,
      },

      title: {
        color: "#1da1f2",
        fontSize: 28,
        fontFamily: "Roboto_500Medium",
        maxWidth: 260,
        marginLeft: 30,
        paddingRight: 10,
        paddingLeft: 60,
        justifyContent: 'center',
        borderColor: '#989eb1',
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 0.5,
      },
});

export default Mercados;