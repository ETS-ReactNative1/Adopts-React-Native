import React, { useContext, memo } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { FilterContext } from "../contexts/FilterContext";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
  container: {
    height: 75,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "transparent",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  darkMode: {
    height: 75,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#121212",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    borderTopColor: "white",
    borderTopWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  },
  logo: {
    height: 200,
    width: 220,
    top: 0,
    marginLeft: 5,
    resizeMode: "contain",
    borderRadius: 60,
  },
});

function TopBar() {
  const navigation = useNavigation();

  const { darkModeOn, onboarding } = useContext(FilterContext);

  const falseLightOnboarding = {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  };

  const trueLightOnboarding = {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: 0,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  };

  const falseDarkOnboarding = {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  };

  const trueDarkOnboarding = {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#000",
    borderBottomColor: "white",
    borderBottomWidth: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 5.46,
    elevation: 9,
  };
  return (
    <LinearGradient
      colors={
        darkModeOn ? ["#121212", "#121212"] : ["transparent", "transparent"]
      }
      style={darkModeOn ? styles.darkMode : styles.container}
    >
      <TouchableOpacity>
        <Feather
          name="user"
          size={30}
          color={darkModeOn ? "#c32aff" : "#c471ed"}
          onPress={() => navigation.navigate("UserSettings")}
          style={{ bottom: -2 }}
        />
      </TouchableOpacity>
      <Image
        source={require("../assets/Adopts.png")}
        style={styles.logo}
      ></Image>

      <TouchableOpacity
        onPress={() => navigation.navigate("Favorites")}
        style={{ left: 5 }}
      >
        <Feather
          name="heart"
          size={30}
          color={darkModeOn ? "#ff0dbf" : "#ef32d9b2"}
          style={{ bottom: -5 }}
        />
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Filters")}
        style={{ left: 5 }}
      >
        <Feather
          name="settings"
          size={30}
          color={darkModeOn ? "lightskyblue" : "rgba(38, 64, 179, 0.842)"}
          style={{ bottom: -5 }}
        />
      </TouchableOpacity> */}
    </LinearGradient>
  );
}

export default memo(TopBar);
