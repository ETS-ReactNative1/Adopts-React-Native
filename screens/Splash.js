import React, { useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Image } from "react-native";

const SplashScreen = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate("Main");
  }, 3500);

  return (
    <ImageBackground
      resizeMode="contain"
      source={require("../assets/appstore2.png")}
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
