import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Note from './pages/Note';

const AppStack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0c9'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home}/>
        <AppStack.Screen name="Note" component={Note}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
