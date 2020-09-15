import React, {useEffect, useState, useMemo} from 'react';
import { View, Text, ImageBackground , StyleSheet, TouchableOpacity} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { format } from 'date-fns';

//import ListNotes from '../ListNotes';
import api from '../../services/api';

interface Notes {
  id: string;
  description: string;
  dateAt: Date;
}

const Home = () => {
  const navigation = useNavigation();
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    async function loadNotes() {
        const response = await api.get('/lists');

        setNotes(response.data);
    }
    loadNotes();
  }, []);

  const notesFormatted = useMemo(() => {
    return notes
      .map(({ id, description, dateAt }) => {
        return {
          id,
          description,
          dateFomatted: dateAt//format(dateAt, 'dd/MM/yyyy HH:mm:ss'),
        };
      });
  }, [notes]);

  function handleNavigateList(id: string){
    navigation.navigate('Note', {itemID: id});
  }

  function handleNavigateAddList(){
    navigation.navigate('Note');
  }

  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      resizeMode="contain"
    >
      <View>
        <Text style={styles.header}>Check List</Text>
      </View>
      
      <ScrollView>

        {notesFormatted.map(({id, description, dateFomatted}) => (
          <View key={id} style={styles.itemsContainer}>
            <TouchableOpacity style={styles.item} onPress={() => handleNavigateList(id)}>
              <ImageBackground
                source={require('../../assets/notes.png')}
                style={styles.imgNotes}
              >
              </ImageBackground>
              <Text style={styles.itemTitle}>{description}</Text>
              <Text style={styles.itemTitle}>{dateFomatted}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
        
      <View style={styles.footer}>
        <RectButton style={styles.button} onPress={handleNavigateAddList}>
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
    backgroundColor: '#D5E4EC',    
  },

  header: {
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    fontSize: 36,
    textAlign: 'center'
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

  itemsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 2,
    justifyContent: 'space-around',
    alignItems: 'stretch'
  },

  item: {
    flex: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    //height: 100,
    //width: 320,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 16,
    marginRight: 0,
    alignItems: 'center',
    //justifyContent: 'space-evenly',

    textAlign: 'center',
  },

  itemTitle: {
    fontFamily: 'Roboto_400Regular',
    textAlign: 'center',
    fontSize: 16,
  },

  imgNotes: {
    height: 28,
    width: 28,
  },

});


export default Home;