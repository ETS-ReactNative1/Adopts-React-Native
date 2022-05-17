import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FilterContext } from "../contexts/FilterContext";

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    bottom: 140,
    left: 0,
    width: 200,
    height: 80,
    backgroundColor: "#006994",
    borderRadius: 25,
    padding: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    borderColor: "#393D47",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Futura",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
  darkModeButton: {
    bottom: 140,
    left: 0,
    fontFamily: "Futura",
    width: 200,
    height: 80,
    backgroundColor: "#1F1B24",
    borderRadius: 25,
    padding: 0,
    borderColor: "#1F1B24",
    borderWidth: 1,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Futura",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.15,
    shadowRadius: 6.46,
    elevation: 9,
  },
});

export default function BottomBar({ results, currIndex }) {
  const { setFavorites, favorites, darkModeOn } = useContext(FilterContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={darkModeOn ? styles.darkModeButton : styles.button}
        onPress={() => Linking.openURL(`${results[currIndex].url}`)}
      >
        <FontAwesome name="" size={25} color={darkModeOn ? "#006994" : "white"}>
          {" "}
          View Profile
        </FontAwesome>
      </TouchableOpacity>
    </View>
  );
}
