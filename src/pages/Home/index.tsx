import React from 'react';
import { View, Text, ImageBackground , StyleSheet, TouchableOpacity} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const Home = () => {
  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      resizeMode="contain"
    >
      <View>
        <Text style={styles.header}>NOTAS</Text>
      </View>
      
      <View style={styles.main}>
      </View>
        
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonMais}>+</Text>
        </RectButton>
      </View>
        
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#f0f0d9',    
  },

  header: {
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    fontSize: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    width: 60,
    //flexDirection: 'row',
    borderRadius: 50,
    //overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonMais: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 42,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

});


export default Home;