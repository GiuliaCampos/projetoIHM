import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import {View, Text, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';


const home = () => {
    const navigation = useNavigation();

    function handleNavigationToCompras(){
        navigation.navigate('Compras');
    }

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Image style={styles.logo} source={require('../../assets/logo.png')} />
                <Text style={styles.title}>Entrar</Text>
                <Text style={styles.description}>Olá! É bom te ver de novo.</Text>
            </View>
            <View style={styles.footer}>
                <View>
                    <Text style={styles.inputName}>Email</Text>
                    <TextInput style={styles.input} 
                      textContentType={"emailAddress"} 
                      keyboardType={"email-address"}
                      placeholder={"exemple@email.com"}
                    />
                    <Text style={styles.inputName}>Senha</Text>
                    <TextInput style={styles.input} 
                      textContentType={"password"}
                      placeholder={"senha"} 
                    />
                </View>
                <RectButton style={styles.button} onPress={handleNavigationToCompras}>
                    {/* <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="arrow-right" color='#fff' size={24}></Icon>
                        </Text>
                    </View> */}
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
                <Text style={styles.description}>ou use seu perfil nas redes</Text>
                <RectButton style={styles.buttonFacebook} onPress={() => {}}>
                    <View style={styles.buttonIcon}>
                        <Text>
                            <Icon name="facebook" color='#fff' size={24} />
                        </Text>
                    </View>
                    <Text style={styles.buttonText}>Facebook</Text>
                </RectButton>
            </View>
        </View>
    );
};

//ff6624 (laranja) 1da1f2(azul)
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#fff'
      },
    
      main: {
        justifyContent: "center",
      },

      logo: {
        marginLeft: 60,
      },
    
      title: {
        color: "#35424a",
        fontSize: 32,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        marginTop: 64,
      },
    
      description: {
        color: "#989eb1",
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Roboto_400Regular",
        maxWidth: 260,
        lineHeight: 24,
      },

      inputName: {
        color: "#1da1f2",
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        lineHeight: 24
      },
    
      footer: {},
    
      select: {},
    
      input: {
        height: 40,
        backgroundColor: "#FFF",
        borderBottomWidth: 2,
        borderColor: '#ebebeb',
        marginBottom: 8,
        paddingHorizontal: 24,
        fontSize: 16,
      },
    
      button: {
        backgroundColor: "#ff6624",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 8,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        justifyContent: "center",
        alignItems: "center",
      },
    
      buttonText: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        color: "#FFF",
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
      },

      buttonFacebook: {
        backgroundColor: "#3b5998",
        height: 60,
        flexDirection: "row",
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 8,
      }
});

export default home;