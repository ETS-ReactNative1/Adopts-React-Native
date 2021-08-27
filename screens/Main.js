import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import SwipeAction from '../components/SwipeAction';
import { FilterContext } from '../contexts/FilterContext';
import { getStatusBarHeight } from 'react-native-status-bar-height';



export default function Main() {

  const { 
    results, fetchAnimals, 
    animalType, location, age, 
    gender, currIndex, setCurrIndex} 
    = useContext(FilterContext);


useEffect(() => {
  fetchAnimals();
}, [])

  function handleLike() {
    console.log('next')
    console.log(animalType, location, age, gender)
    nextAnimal()
  }

  function nextAnimal() {
    const nextIndex = results.length - 2 === currIndex ? 0 : currIndex + 1;
    setCurrIndex(nextIndex);
  }
 
  return (
    <SafeAreaView style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
      {results.length > 1 &&
          results.map(
            (u, i) =>
              currIndex === i && (
                <SwipeAction
                  key={i}
                  currIndex={currIndex}
                  results={results}
                  handleLike={handleLike}
                ></SwipeAction>
              )
          )}
        <BottomBar results={results} currIndex={currIndex} />
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: getStatusBarHeight(),

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
  }
});
