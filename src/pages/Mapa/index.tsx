import React from 'react';
import {Feather as Icon} from "@expo/vector-icons";
import {useNavigation} from '@react-navigation/native';
import { View, Image, ScrollView, Text,StyleSheet, TouchableOpacity } from 'react-native';

const Compras = () => {
  const navigation = useNavigation();

  function handleNavigationBack(){
    navigation.goBack();
  }

    return (
    <>
        <View style={styles.container}>
          <View style={styles.main}>
          <TouchableOpacity onPress={handleNavigationBack}>
            <Icon name="arrow-left" size={20} color="#1da1f2"/>
          </TouchableOpacity>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
              <Text style={styles.title}>
                Mapa do Mercado
              </Text>
          </View>
          <ScrollView>
            <View style={styles.lista}>
                <Text style={styles.nomeProduto}>Produtinhos</Text>
                <Text style={styles.descricao}>Sabão em Pó - corredor 6</Text>
                <Text style={styles.descricao}>Promoção de Bolos - Padaria</Text>
                <Text style={styles.descricao}>Frango - Açougue</Text>
                <Text style={styles.descricao}>Maça - Corredor 3</Text>
                <Text style={styles.descricao}>Arroz - corredor 2</Text>
            </View>
            <Image style={styles.mapa} source={require('../../assets/Mapa.png')} />  
          </ScrollView>
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
              <Icon name='list' color='#ffa382' size={35} />
            </Text>
          </View>
            <Text style={styles.menuTextEnable}>
              Minha Lista
            </Text>
          </View>
          <View style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>
                <Icon name='shopping-cart' color='#1da1f2' size={35} />
              </Text>
            </View>
            <Text style={styles.menuTextSelecionado}>
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
        fontSize: 25,
        fontFamily: "Roboto_500Medium",
        maxWidth: 260,
        marginLeft: 30,
        paddingLeft: 30,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'center',
        borderColor: '#989eb1',
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 0.5,
      },

      lista: {
        paddingBottom: 15,
      },

      nomeProduto: {
        color: "#35424a",
        fontSize: 20,
        fontFamily: "Ubuntu_700Bold",
        maxWidth: 260,
        marginTop: 30,
      },

      descricao: {
        color: "#989eb1",
        fontSize: 16,
        marginTop: 16,
        fontFamily: "Roboto_400Regular",
        
      },

      mapa: {
        
      },

      produto: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
      },

      icon: {
        height: 60,
        width: 60,
        backgroundColor: "rgba(0, 0, 0, 0.0)",
        justifyContent: "center",
        alignItems: "center",
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