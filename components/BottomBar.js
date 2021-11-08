import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FilterContext } from "../contexts/FilterContext";

export default function BottomBar({ results, currIndex }) {
  const { setFavorites, favorites, darkModeOn } = useContext(FilterContext);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={darkModeOn ? styles.darkModeButton : styles.button}
        onPress={() => Linking.openURL(`${results[currIndex].url}`)}
      >
        <FontAwesome
          name="search-plus"
          size={25}
          color={darkModeOn ? "lightskyblue" : "rgba(38, 64, 179, 0.842)"}
        >
          {" "}
          Profile
        </FontAwesome>
      </TouchableOpacity>
      <TouchableOpacity
        style={darkModeOn ? styles.darkModeButton : styles.button}
        onPress={() => {
          setFavorites([...favorites, results[currIndex]]);
          alert("Liked", "Saved to your liked animals");
        }}
      >
        <FontAwesome
          name="heart"
          size={25}
          color={darkModeOn ? "#ff0dbf" : "#ef32d9b2"}
        >
          {" "}
          Like
        </FontAwesome>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 75,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    bottom: 110,
    left: 0,
    width: 124,
    height: 80,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
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
    bottom: 110,
    left: 0,
    width: 124,
    height: 80,
    backgroundColor: "rgba(46, 46, 46, 0.733)",
    borderRadius: 25,
    padding: 0,
    borderColor: "white",
    borderWidth: 1,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderWidth: 0.5,
    justifyContent: "center",
    alignItems: "center",
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
