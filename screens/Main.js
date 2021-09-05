import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import SwipeAction from '../components/SwipeAction';
import { FilterContext } from '../contexts/FilterContext';
import { getStatusBarHeight } from 'react-native-status-bar-height';






export default function Main() {

  const { 
    results, fetchAnimals, 
    animalType, location, age, 
    gender, currIndex, setCurrIndex, favorites, setFavorites, darkModeOn} 
    = useContext(FilterContext);




useEffect(() => {
    fetchAnimals();
}, [])

  function handleLike(id) {
    console.log('like')
    console.log(animalType, location, age, gender)
    if (!favorites.includes(id)) {
      setFavorites([...favorites, results[currIndex]])
    } else {
      alert(`You've already liked this animal`)
    }
    nextAnimal()
  }

  function handlePass() {
    console.log('pass')
    nextAnimal()
  }

  function nextAnimal() {
    const nextIndex = results.length - 2 === currIndex ? 0 : currIndex + 1;
    setCurrIndex(nextIndex);
  }

  function displayAnimals(){
    return (
      results.length > 1 &&
            results.map(
              (u, i) =>
              currIndex === i && (
                <SwipeAction
                key={i}
                currIndex={currIndex}
                results={results}
                handleLike={handleLike}
                handlePass={handlePass}
                ></SwipeAction>
                )
                )
    )
  }
 
  return (
    <SafeAreaView style={darkModeOn ? styles.darkMode : styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {results.length > 1 ? displayAnimals() : <Text style={darkModeOn ? styles.darkModeNoResults : styles.noResults}>There are no results to display, please try a different search</Text>}
        {results.length > 1 ? <BottomBar results={results} currIndex={currIndex} /> : null}
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    backgroundColor: 'white'
  },
  darkMode: {
    flex: 1,
    marginTop: getStatusBarHeight(),
    backgroundColor: 'black'
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  noResults: {
    marginLeft: 35,
    marginTop: 260, 
    fontWeight: '500',
    fontSize: 16,
},
darkModeNoResults: {
    marginLeft: 35,
    marginTop: 260, 
    fontWeight: '500',
    fontSize: 16,
    color: 'white'
},
});
