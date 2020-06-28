import React, {useState} from 'react';
import {Feather as Icon} from  '@expo/vector-icons';
import {RectButton} from 'react-native-gesture-handler';
import { View, Text, StyleSheet, Image, Switch, ScrollView, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Mercados = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled5, setIsEnabled5] = useState(false);


  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
    setIsEnabled2(false);
    setIsEnabled3(false);
    setIsEnabled4(false);
    setIsEnabled5(false);
  }

  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
    setIsEnabled1(false);
    setIsEnabled3(false);
    setIsEnabled4(false);
    setIsEnabled5(false);
  }

  const toggleSwitch3 = () => {
    setIsEnabled3(previousState => !previousState);
    setIsEnabled2(false);
    setIsEnabled1(false);
    setIsEnabled4(false);
    setIsEnabled5(false);
  }

  const toggleSwitch4 = () => {
    setIsEnabled4(previousState => !previousState);
    setIsEnabled2(false);
    setIsEnabled3(false);
    setIsEnabled1(false);
    setIsEnabled5(false);
  }

  const toggleSwitch5 = () => {
    setIsEnabled5(previousState => !previousState);
    setIsEnabled2(false);
    setIsEnabled3(false);
    setIsEnabled4(false);
    setIsEnabled1(false);
  }


  const navigation = useNavigation();

  function handleNavigationToMercados(){
    navigation.navigate('Mapa');
  }

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
                Selecione o Mercado
              </Text>
          </View>
          <ScrollView>
            <View style={styles.lista}>
              <View style={styles.mercado}>
                <Text style={styles.nomeMercado}>
                  Mercado do Zé
                </Text>
              </View>
              <Switch
                onValueChange={toggleSwitch1}
                value={isEnabled1}
                style={styles.buttonSwitch}
              />
            </View>
            <View style={styles.lista}>
              <View style={styles.mercado}>
                <Text style={styles.nomeMercado}>
                  Mercado da Maria
                </Text>
              </View>
              <Switch
                onValueChange={toggleSwitch2}
                value={isEnabled2}
                style={styles.buttonSwitch}
              />
            </View>
            <View style={styles.lista}>
              <View style={styles.mercado}>
                <Text style={styles.nomeMercado}>
                  Mercado da Esquina
                </Text>
              </View>
              <Switch
                onValueChange={toggleSwitch3}
                value={isEnabled3}
                style={styles.buttonSwitch}
              />
            </View>
            <View style={styles.lista}>
              <View style={styles.mercado}>
                <Text style={styles.nomeMercado}>
                  Extra
                </Text>
              </View>
              <Switch
                onValueChange={toggleSwitch4}
                value={isEnabled4}
                style={styles.buttonSwitch}
              />
            </View>
            <View style={styles.lista}>
              <View style={styles.mercado}>
                <Text style={styles.nomeMercado}>
                  Carrefour
                </Text>
              </View>
              <Switch
                onValueChange={toggleSwitch5}
                value={isEnabled5}
                style={styles.buttonSwitch}
              />
            </View>
            <RectButton style={styles.buttonPronto} onPress={handleNavigationToMercados}>
              <Text style={styles.buttonText}>Pronto!</Text>
            </RectButton>
          </ScrollView>
        </View>
        <View style={styles.menu}>
          <View style={styles.menuItem}>
            <View style={styles.menuIcon}>
              <Text>
                <Icon name='user-plus' color='#ffa382' size={35} />
              </Text>
            </View>
            <Text style={styles.menuTextEnable}>
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
        paddingLeft: 10,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent: 'center',
        borderColor: '#989eb1',
        borderStyle: 'dotted',
        borderRadius: 10,
        borderWidth: 0.5,
      },

      lista: {
        paddingBottom: 5,
        justifyContent: 'center',
        
      },

      mercado: {
        marginTop: 30,
        borderColor: '#cfcfcf',
        borderStyle: 'solid',
        borderWidth: 0.5,
        borderRadius: 5,
        paddingTop: 10,
        paddingBottom: 10,
        maxWidth: 300,
        justifyContent: 'flex-end',
      },

      nomeMercado: {
        color: "#35424a",
        fontSize: 25,
        fontFamily: "Ubuntu_700Bold",
        paddingLeft: 5,
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

      buttonSwitch: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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

export default Mercados;