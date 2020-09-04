import React from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { CheckBox } from 'react-native-elements';

import Check from '../Check';

const Note = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  function handleNavigateConfirm() {
    //navigation.goBack();
  }

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleNavigateBack}>
          <Icon name="arrow-left" size={28} color="#fff"></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigateConfirm}>
          <Icon name="check" size={28} color="#fff"></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.viewText}>
        <TextInput style={styles.text} placeholder="Title" ></TextInput>
      </View>

      <View style={styles.body}>
        <Check title="Ovos"></Check>
        <Check title="Leite"></Check>
        <Check title="Farinha"></Check>
        <Check title="Amaciante"></Check>
        <Check title="Pão de leite"></Check>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'flex-end',
    
    backgroundColor: '#000',
  },

  header: {
    flex: 0,
    height: 70,
    flexDirection: "row",
    //alignItems: 'center',
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 18,
    
  },
  
  viewText: {
    width: '98%',
    height: 60,
    backgroundColor: '#000',
    borderRadius: 1,
    marginBottom: 8,
    marginLeft: 1,
    borderWidth: 1,
    borderColor: '#232129',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },

  text: {
    flex: 1,
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Roboto_400Regular',
    marginLeft: 10,
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    marginBottom: 0,
    marginTop: 0

  },

  check: {
    backgroundColor: '#000',
    borderColor: '#000',
  },

});

export default Note;