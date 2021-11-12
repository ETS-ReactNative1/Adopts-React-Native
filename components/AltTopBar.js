import React, { useContext } from "react";
import { Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FilterContext } from "../contexts/FilterContext";

export default function AltTopBar() {
  const { darkModeOn, onboarding } = useContext(FilterContext);
  const navigation = useNavigation();

  const falseLightOnboarding = {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: getStatusBarHeight(),
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
    marginTop: getStatusBarHeight(),
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
    marginTop: 0,
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
    <SafeAreaView style={darkModeOn ? styles.darkMode : styles.container}>
      <Text
        style={{
          marginLeft: 0,
          marginTop: 10,
          marginBottom: 5,
          fontWeight: "bold",
          fontSize: 18,
          color: darkModeOn ? "white" : "gray",
        }}
      >
        {" "}
        <Feather
          name="settings"
          size={20}
          color={darkModeOn ? "lightskyblue" : "dodgerblue"}
        />{" "}
        Search Filters
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Ionicons
          name="home-outline"
          size={35}
          color={darkModeOn ? "#c32aff" : "#c471ed"}
          style={{ opacity: 0 }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate("Favorites")}
        style={{ marginLeft: 90 }}
      >
        <Feather
          name="heart"
          size={30}
          color={darkModeOn ? "#ff0dbf" : "#ef32d9b2"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Ionicons
          name="home-outline"
          size={32}
          color="#c471ed"
          style={{ marginLeft: 0 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: getStatusBarHeight(),
    backgroundColor: "white",
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
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginTop: getStatusBarHeight(),
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
  },
  name: {
    fontSize: 35,
    fontWeight: "900",
    color: "dodgerblue",
  },
});
