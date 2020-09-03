import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';

import api from '../../services/api';

interface Notes {
  id: string;
  description: string;
  dateAt: string;
}

const ListNotes = () => {
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    async function loadNotes() {
        const response = await api.get('/lists');

        setNotes(response.data);
    }
    loadNotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container2}>
          
          <FlatList 
              style={styles.list}
              data={notes}
              keyExtractor={notes => notes.id}
              renderItem={({ item }) => (
                <View style={styles.listItem}>
                    <Text style={styles.company}> {item.description} </Text>
                    <Text style={styles.company}> {item.dateAt} </Text>
                </View>
              )}
          />
        </View>
          
      </ScrollView>        
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },

  container2: {
    marginTop: 20
},

title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15
},

bold: {
    fontWeight: 'bold'
},

list: {
    paddingHorizontal: 20
},

listItem: {
    marginRight: 15
},

company: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
},

});

export default ListNotes;