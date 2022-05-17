import React, { useContext, memo } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import { FontAwesome } from "@expo/vector-icons";
import { FilterContext } from "../contexts/FilterContext";
import FavoritesTopBar from "../components/FavoritesTopBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#F2E9EA",
  },
  darkMode: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#121212",
  },
  animal: {
    margin: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 25,
    padding: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 120,
  },
  darkModeAnimal: {
    margin: 8,
    borderWidth: 0.7,
    borderColor: "#1F1B24",
    borderRadius: 25,
    padding: 0,
    backgroundColor: "#1F1B24",
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 120,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    marginLeft: 10,
    marginTop: 10,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  textPrimary: {
    fontWeight: "bold",
    color: "#006994",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Futura",
    bottom: 75,
    left: 23,
  },
  darkModeTextPrimary: {
    fontWeight: "bold",
    color: "white",
    fontFamily: "Futura",
    fontSize: 18,
    textAlign: "center",
    bottom: 75,
    left: 23,
  },
  textSecondary: {
    fontWeight: "bold",
    color: "#393D47",
    fontSize: 20,
    textAlign: "center",
    bottom: 70,
    left: 23,
  },
  darkModeTextSecondary: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    bottom: 70,
    left: 23,
  },
  textBoy: {
    fontWeight: "bold",
    color: "#006994",
    textAlign: "center",
    bottom: 70,
    left: 20,
    fontSize: 12,
  },
  textGirl: {
    fontWeight: "bold",
    color: "#c471ed",
    textAlign: "center",
    bottom: 65,
    left: 20,
    fontSize: 12,
  },
  noFavorites: {
    position: "absolute",
    top: 300,
    left: 45,
    fontWeight: "500",
    fontSize: 16,
  },
  darkModeNoFavorites: {
    position: "absolute",
    top: 300,
    left: 45,
    fontWeight: "500",
    fontSize: 16,
    color: "white",
  },
  button: {
    bottom: "82%",
    left: "80%",
    width: 70,
    height: 50,
    backgroundColor: "transparent",
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
    bottom: "82%",
    left: "80%",
    width: 70,
    height: 50,
    backgroundColor: "rgba(46, 46, 46, 0.733)",
    borderRadius: 25,
    padding: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: "#1F1B24",
    borderWidth: 0.7,
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

function Favorites() {
  const {
    favorites,
    setFavorites,
    darkModeOn,
    saveFavorites,
    removeFavorites,
    currIndex,
  } = useContext(FilterContext);

  const nameFilter = (name) => {
    var str = name;
    if (str.length > 10) {
      str = str.substring(0, 18);
    }

    if (/\d/.test(str)) {
      return "No name yet!";
    }
    return str;
  };

  const handleRemove = (id) => (e) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));
    removeFavorites(id);
  };

  const favoritesList = () => {
    return favorites.map((fav) => {
      return (
        <View
          key={fav.id}
          style={darkModeOn ? styles.darkModeAnimal : styles.animal}
        >
          <TouchableOpacity onPress={() => Linking.openURL(`${fav.url}`)}>
            <Image source={{ uri: fav.photos[0].full }} style={styles.image} />
            <Text
              style={
                fav.gender === "Male"
                  ? darkModeOn
                    ? styles.darkModeTextPrimary
                    : styles.textPrimary
                  : darkModeOn
                  ? styles.darkModeTextSecondary
                  : styles.textSecondary
              }
            >
              {nameFilter(fav.name)}
            </Text>
            {/* <Text style={fav.gender === 'Male' ? styles.textBoy : styles.textGirl}>{fav.gender}</Text> */}
            <Text
              style={fav.gender === "Male" ? styles.textBoy : styles.textGirl}
            >
              {fav.breeds.primary}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={darkModeOn ? styles.darkModeButton : styles.button}
            onPress={handleRemove(fav.id)}
          >
            <FontAwesome name="remove" size={25} color="red" />
            {/* <Text style={{color: '#ff5252', fontWeight: 'bold', fontSize: 12.9}}>Remove</Text> */}
          </TouchableOpacity>
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={darkModeOn ? styles.darkMode : styles.container}>
      <FavoritesTopBar />
      <ScrollView>
        <Text
          style={{
            marginLeft: 15,
            marginTop: 0,
            marginBottom: 0,
            fontWeight: "bold",
            fontSize: 18,
            color: "gray",
            opacity: 0,
          }}
        >
          {" "}
          <FontAwesome name="heart" size={20} color="#ef32d9b2" /> Favorites
        </Text>
        {favorites.length > 0 ? (
          favoritesList()
        ) : (
          <Text
            style={darkModeOn ? styles.darkModeNoFavorites : styles.noFavorites}
          >
            Like an animal to add them to your favorites!
          </Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

export default memo(Favorites);
