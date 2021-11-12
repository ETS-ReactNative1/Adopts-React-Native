import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Swiper from "react-native-swiper";
import { FilterContext } from "../contexts/FilterContext";

const OnboardingScreen = ({ navigation }) => {
  const { onboarding, setOnboarding, initialLoad, setInitialLoad } =
    useContext(FilterContext);

  // useEffect(() => {
  //   setInitialLoad(true);
  //   setOnboarding(true);
  //   console.log("Onboarding1", onboarding);
  //   console.log("initial", initialLoad);
  // }, []);
  return (
    <Swiper style={styles.wrapper} showsButtons={true}>
      <View style={styles.slide1}>
        <Text>Welcome to Adopts</Text>
      </View>
    </Swiper>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightskyblue",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff0dbf",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c32aff",
  },
  slide4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
  },
});
