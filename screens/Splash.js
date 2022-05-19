import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useContext } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";
import { FilterContext } from "../contexts/FilterContext";

const SplashScreen = ({ navigation }) => {
  const {
    fetchSavedAnimals,
    loadDarkMode,
    loadFavorites,
    loadAnimalType,
    loadAge,
    loadLocation,
    loadGender,
    loadBreed,
    setUpdateSettings,
    firstLaunch,
    setFirstLaunch,
  } = useContext(FilterContext);

  const loadOnboarding = async () => {
    try {
      let onboard = await AsyncStorage.getItem("Onboarding");
      console.log("onBoard", onboard);
      let value = onboard === "false" ? false : null;
      setFirstLaunch(value);
    } catch (err) {
      alert(err);
    }
  };

  console.log("onboarding", firstLaunch);

  useEffect(() => {
    try {
      loadOnboarding();
    } catch (err) {
      console.log(err);
    } finally {
      loadAnimalType();
      loadAge();
      loadLocation();
      loadGender();
      loadBreed();
      loadDarkMode();
      loadFavorites();
      setUpdateSettings(true);
      fetchSavedAnimals();
      setTimeout(() => {
        navigation.navigate(firstLaunch === null ? "Onboarding" : "Main");
      }, 3500);
    }
  }, []);

  return (
    <ImageBackground
      resizeMode="contain"
      source={require("../assets/Adopts.png")}
      style={{ width: "100%", height: "100%", alignItems: "center" }}
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    opacity: 1,
  },
  logoText: {
    fontSize: 24,
    fontWeight: "900",
    color: "dodgerblue",
    top: 0,
  },
  bodyText: {
    fontSize: 24,
    fontWeight: "600",
    color: "white",
    top: 20,
    left: 30,
    marginTop: 10,
  },
  logoDescription: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  logoImg: {
    top: -250,
    width: 310,
    height: 100,
  },
});

export default SplashScreen;
