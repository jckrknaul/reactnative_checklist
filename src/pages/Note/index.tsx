import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Note = () => {
  const navigation = useNavigation();

  function handleNavigateBack() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon name="arrow-left" size={24} color="#34cb79"></Icon>
      </TouchableOpacity>

      


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingTop: 20 + Constants.statusBarHeight,
  },

  linha: {
    flex: 1,

  }

});

export default Note;