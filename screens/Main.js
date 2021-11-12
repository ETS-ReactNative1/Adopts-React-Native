import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import SwipeAction from "../components/SwipeAction";
import { FilterContext } from "../contexts/FilterContext";
import { getStatusBarHeight } from "react-native-status-bar-height";
import Spinner from "react-native-loading-spinner-overlay";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
export default function Main() {
  const {
    results,
    fetchAnimals,
    animalType,
    location,
    age,
    gender,
    breed,
    loading,
    setLoading,
    currIndex,
    setCurrIndex,
    favorites,
    setFavorites,
    darkModeOn,
    saveFavorites,
    loadFavorites,
    loadDarkMode,
    loadAge,
    loadLocation,
    loadAnimalType,
    currType,
    setCurrType,
    removeBreed,
    setFirstLoad,
    firstLoad,
    fetchSavedAnimals,
    updateSettings,
    setUpdateSettings,
    initialLoad,
    setInitialLoad,
    onboarding,
    setOnboarding,
    saveOnboarding,
    loadOnboarding,
  } = useContext(FilterContext);

  useEffect(() => {
    if (firstLoad === true || updateSettings === true) {
      fetchSavedAnimals();
      loadDarkMode();
      loadFavorites();
      loadLocation();
    }
    setUpdateSettings(false);
    console.log(animalType, breed, location, age, gender, firstLoad);
    console.log("Onboarding", onboarding);
    console.log("initalLoad", initialLoad);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  function handleLike(id) {
    console.log("like");
    if (!favorites.includes(id)) {
      saveFavorites([...favorites, results[currIndex]]);
      setFavorites([...favorites, results[currIndex]]);
      setOnboarding(false);
    } else {
      alert(`You've already liked this animal`);
    }
    nextAnimal();
  }

  function handlePass() {
    console.log("pass");
    nextAnimal();
  }

  function nextAnimal() {
    const nextIndex = results.length - 2 === currIndex ? 0 : currIndex + 1;
    setCurrIndex(nextIndex);
  }

  function displayAnimals() {
    return (
      results.length > 1 &&
      results.map(
        (u, i) =>
          currIndex === i && (
            <SwipeAction
              key={i}
              currIndex={currIndex}
              results={results}
              setType={setCurrType}
              handleLike={handleLike}
              handlePass={handlePass}
            ></SwipeAction>
          )
      )
    );
  }

  return (
    <SafeAreaView style={darkModeOn ? styles.darkMode : styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {loading === false && results.length > 1 && (
          <View
            style={{
              display: "flex",
              alignItems: "flex-end",
              flexDirection: "row",
              justifyContent: "flex-end",
              top: 2,
            }}
          >
            <FontAwesome5
              name={
                currType === "Dog"
                  ? "dog"
                  : currType === "Cat"
                  ? "cat"
                  : currType === "Rabbit"
                  ? "carrot"
                  : "dove"
              }
              size={15}
              color={darkModeOn ? "#c32aff" : "#c471ed"}
              style={styles.animalType}
            />
            <Feather
              name="map-pin"
              size={14}
              color={darkModeOn ? "lightskyblue" : "dodgerblue"}
              style={{ paddingRight: 4 }}
            />
            <Text style={darkModeOn ? styles.darkLocation : styles.location}>
              {location}
            </Text>
          </View>
        )}
        {loading === false && results.length > 1 ? (
          displayAnimals()
        ) : loading ? (
          <Spinner
            visible={loading}
            textContent={"Loading..."}
            textStyle={styles.spinnerTextStyle}
          />
        ) : (
          <View>
            <Text
              style={darkModeOn ? styles.darkModeNoResults : styles.noResults}
            >
              There are no results to display, please try a different search
            </Text>
          </View>
        )}
        {loading === false && results.length > 1 ? (
          <BottomBar results={results} currIndex={currIndex} />
        ) : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  darkMode: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#121212",
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  noResults: {
    marginLeft: 35,
    marginTop: 260,
    fontWeight: "500",
    fontSize: 16,
  },
  darkModeNoResults: {
    marginLeft: 35,
    marginTop: 260,
    fontWeight: "500",
    fontSize: 16,
    color: "white",
  },
  spinnerTextStyle: {
    color: "#FFF",
  },
  location: {
    top: 2,
    right: 2,
    fontWeight: "900",
    fontSize: 14,
    color: "black",
  },
  darkLocation: {
    top: 2,
    right: 2,
    fontWeight: "900",
    fontSize: 14,
    color: "white",
  },
  animalType: {
    top: 0,
    right: 4,
    paddingRight: 1,
  },
});
