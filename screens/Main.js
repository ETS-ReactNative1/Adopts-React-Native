import React, { useEffect, useContext, memo, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";
import SwipeAction from "../components/SwipeAction";
import { FilterContext } from "../contexts/FilterContext";
import Spinner from "react-native-loading-spinner-overlay";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { AdMobInterstitial } from "expo-ads-admob";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
  },
  darkMode: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#121212",
  },
  swipes: {
    flex: 1,
    padding: 10,
    paddingTop: 0,
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
    color: "#006994",
    fontFamily: "Futura",
  },
  darkLocation: {
    top: 2,
    right: 2,
    fontWeight: "900",
    fontSize: 14,
    color: "white",
    fontFamily: "Futura",
  },
  animalType: {
    top: 0,
    right: 4,
    paddingRight: 1,
  },
});

function Main() {
  const {
    results,
    location,
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
    currType,
    setCurrType,
    fetchSavedAnimals,
    updateSettings,
    setUpdateSettings,
    firstLaunch,
  } = useContext(FilterContext);

  const [swipeCount, setSwipeCount] = useState(0);

  useEffect(() => {
    if (updateSettings === true) {
      fetchSavedAnimals();
      loadDarkMode();
      loadFavorites();
    }
    setUpdateSettings(false);
  }, []);

  console.log("mainOnboarding", firstLaunch);

  setTimeout(() => {
    setLoading(false);
  }, 3500);

  function handleLike(id) {
    console.log("like");
    if (!favorites.includes(id)) {
      saveFavorites([...favorites, results[currIndex]]);
      setFavorites([...favorites, results[currIndex]]);
    } else {
      alert(`You've already liked this animal`);
    }
    nextAnimal();
  }

  function handlePass() {
    console.log("pass");
    nextAnimal();
  }

  async function nextAnimal() {
    if (swipeCount < 9) {
      const nextIndex = results.length - 2 === currIndex ? 0 : currIndex + 1;
      setCurrIndex(nextIndex);
      setSwipeCount(swipeCount + 1);
      console.log("swipes", swipeCount);
    } else {
      setSwipeCount(0);
      AdMobInterstitial.setAdUnitID("ca-app-pub-3940256099942544/4411468910");
      await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: false });
      await AdMobInterstitial.showAdAsync();
    }
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
    <LinearGradient
      colors={darkModeOn ? ["#121212", "#121212"] : ["#F2E9EA", "white"]}
      style={{ flex: 1 }}
    >
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
              color={darkModeOn ? "#c32aff" : "#006994"}
              style={styles.animalType}
            />
            <Feather
              name="map-pin"
              size={14}
              color={darkModeOn ? "#006994" : "#006994"}
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
    </LinearGradient>
  );
}

export default memo(Main);
