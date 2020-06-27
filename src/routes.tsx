import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Compras from './pages/Compras';
import Mercados from './pages/Mercados';
import Mapa from './pages/Mapa';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none">
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Compras" component={Compras}/>
                <AppStack.Screen name="Mercados" component={Mercados}/>
                <AppStack.Screen name="Mapa" component={Mapa}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;