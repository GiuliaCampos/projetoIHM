import React from 'react';
import {Feather as Icon} from '@expo/vector-icons';
import { View, Text, Image, StyleSheet } from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Compras = () => {
    const navigation = useNavigation();

    function handleNavigationToMercados(){
        navigation.navigate('Mercados');
    }

    return (
        <>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Image style={styles.logo} source={require('../../assets/logo.png')} />
                    <Text style={styles.title}>
                        Minha Lista
                    </Text>
                </View>
                <View style={styles.lista}>
                    <Text style={styles.nomeProduto}>
                        Arroz
                    </Text>
                    <Text style={styles.descricao}>
                        Pacote com 5kg - marca Tio João
                    </Text>
                </View>
                <View style={styles.lista}>
                    <Text style={styles.nomeProduto}>
                        Sabão em Pó
                    </Text>
                    <Text style={styles.descricao}>
                        Pacote com 2kg - marca Omo
                    </Text>
                </View>
                <View style={styles.lista}>
                    <Text style={styles.nomeProduto}>
                        Frango
                    </Text>
                    <Text style={styles.descricao}>
                        Peito de frango 2kg
                    </Text>
                </View>
                <View style={styles.botoes}>
                    <RectButton style={styles.buttonPlus}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name='plus-circle' color='#fff' size={30}/>
                            </Text>
                        </View>
                    </RectButton>
                    <RectButton style={styles.buttonPronto} onPress={handleNavigationToMercados}>
                        <Text style={styles.buttonText}>Pronto!</Text>
                    </RectButton>
                </View>
            </View>
            <View style={styles.menu}>
                <View style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Text>
                            <Icon name='user-plus' color='#fff' size={35} />
                        </Text>
                    </View>
                    <Text style={styles.menuText}>
                        Compartilhar
                    </Text>
                </View>
                <View style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Text>
                            <Icon name='list' color='#1da1f2' size={35} />
                        </Text>
                    </View>
                    <Text style={styles.menuTextSelecionado}>
                        Minha Lista
                    </Text>
                </View>
                <View style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Text>
                            <Icon name='shopping-cart' color='#ffa382' size={35} />
                        </Text>
                    </View>
                    <Text style={styles.menuTextEnable}>
                        Mercados
                    </Text>
                </View>
            </View>
        </>
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

      lista: {
        paddingBottom: 5,
        borderColor: '#909094',
        borderStyle: 'solid',
        borderBottomWidth: 2,
      },

      nomeProduto: {
        color: "#35424a",
        fontSize: 20,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        marginTop: 64,
      },

      descricao: {
        color: "#989eb1",
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Roboto_400Regular",
        maxWidth: 260,
        lineHeight: 24,
      },

      botoes:{
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 15,
        paddingBottom: 10,
      },

      buttonPlus: {
        backgroundColor: "#ff6624",
        height: 45,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 10,
        width: 40,
      },
    
      buttonIcon: {
        height: 60,
        width: 60,
        paddingBottom: 10,
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        justifyContent: "center",
        alignItems: "center",
      },

      buttonPronto: {
        backgroundColor: "#1da1f2",
        height: 40,
        borderRadius: 10,
        overflow: "hidden",
        alignItems: "center",
        marginTop: 10,
        width: 100,
      },

      buttonText: {
        flex: 1,
        justifyContent: "center",
        textAlign: "center",
        paddingTop: 10,
        color: "#FFF",
        fontFamily: "Roboto_500Medium",
        fontSize: 16,
      },

      menu: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'baseline',
        backgroundColor: '#ff8351',
      },

      menuItem: {
        paddingBottom: 15,
      },

      menuIcon: {
        height: 60,
        width: 60,
        paddingTop: 15,
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        justifyContent: "center",
        alignItems: "center",
      },

      menuText: {
        color: "#fff",
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
        fontFamily: "Roboto_400Regular",
      },

      menuTextSelecionado: {
        color: "#1da1f2",
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
        fontFamily: "Roboto_400Regular",
        textShadowColor: 'rgba(0, 0, 0, 0.8)',
        textShadowOffset: {width: -1, height: 2},
        textShadowRadius: 2,
      },

      menuTextEnable: {
        color: "#ffa382",
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10,
        fontFamily: "Roboto_400Regular",
      },
});

export default Compras;