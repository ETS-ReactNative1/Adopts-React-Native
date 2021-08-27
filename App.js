import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FilterContext } from './contexts/FilterContext';

import Main from './screens/Main';
import Filters from './screens/Filters';
import Favorites from './screens/Favorites';
import { Client } from "@petfinder/petfinder-js";

const Stack = createNativeStackNavigator();

// const key = 'p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV';
// const secret = 'qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy';
const key = 'TzQe0DtZ8F1RkqwSU9LJlbZJVqZtmY5eGYXwXke4OeJWQyIRAD';
const secret = 'SxgQl0TYNDgtpglpBPGGmugrWFsz27ebjFWJmEVV';

const client = new Client({apiKey: key, secret: secret});

export default function App() {

  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [animalType, setAnimalType] = useState('');
  const [location, setLocation] = useState(90023);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const fetchAnimals = () => {
    client.animal.search({
      type: animalType,
      limit: '100',
      location: location,
      age: age,
      gender: gender
    })
      .then((response) => {
          const res = response.data.animals;
          const filtered = [];
  
          for (let i = 0; i < res.length; i++) {
           if (res[i].photos && res[i].photos[0] && res[i].photos[0].full) {
             filtered.push(res[i])
           } 
          }
          setResults(filtered);
          console.log('res', results);
      })
      .catch(function (error) {
          console.log(error)
      });
  }
  
  return (
    <FilterContext.Provider value={{
    fetchAnimals, results, animalType, location, age,
     gender, setAnimalType, setLocation, setAge,
      setGender, favorites, setFavorites, currIndex, setCurrIndex}}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='Main' screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name='Main' component={Main}/>
          <Stack.Screen name='Filters' component={Filters} />
          <Stack.Screen name='Favorites' component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>

    </FilterContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});




