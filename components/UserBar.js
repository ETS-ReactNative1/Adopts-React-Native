import React, { useContext, memo } from "react";
import { Text } from "react-native";
import { StyleSheet, TouchableOpacity, SafeAreaView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { FilterContext } from "../contexts/FilterContext";

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
    backgroundColor: "transparent",
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
  name: {
    fontSize: 35,
    fontWeight: "900",
    color: "dodgerblue",
  },
});

function AltTopBar() {
  const { darkModeOn, onboarding } = useContext(FilterContext);

  const navigation = useNavigation();

  const falseLightOnboarding = {
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
    <View style={darkModeOn ? styles.darkMode : styles.container}>
      <Text
        style={{
          marginLeft: 0,
          marginTop: 10,
          marginBottom: 5,
          fontWeight: "bold",
          fontSize: 18,
          fontFamily: "Futura",
          color: darkModeOn ? "white" : "#006994",
        }}
      >
        {" "}
        <Feather
          name="user"
          size={20}
          color={darkModeOn ? "lightskyblue" : "rgba(38, 64, 179, 0.842)"}
        />{" "}
        User Settings
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
        style={{ marginLeft: 110 }}
      >
        <Feather
          name="heart"
          size={30}
          color={darkModeOn ? "#ff0dbf" : "#ef32d9b2"}
        />
      </TouchableOpacity>

      {/* <TouchableOpacity
        onPress={() => navigation.navigate("Filters")}
        style={{ paddingLeft: 15 }}
      >
        <Feather
          name="settings"
          size={30}
          color={darkModeOn ? "lightskyblue" : "rgba(38, 64, 179, 0.842)"}
          style={{ bottom: 0 }}
        />
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => navigation.navigate("Main")}>
        <Ionicons
          name="home-outline"
          size={32}
          color="#006994"
          style={{ paddingLeft: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default memo(AltTopBar);
