import React, { useEffect, memo } from "react";
import { View, Image, StyleSheet, Text, ActivityIndicator } from "react-native";

const boxStyle = {
  position: "absolute",
  top: "50%",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  borderWidth: 3,
  borderRadius: 10,
};

const styles = StyleSheet.create({
  container: {
    height: "95%",
  },
  likeBox: {
    ...boxStyle,
    left: "50%",
    borderColor: "#64EDCC",
  },
  passBox: {
    ...boxStyle,
    left: "50%",
    borderColor: "red",
  },
  photo: {
    height: "88%",
    resizeMode: "cover",
    borderRadius: 60,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    borderColor: "#5c5c5c",
    borderWidth: 2,
    marginTop: 20,
  },
  name: {
    color: "white",
    fontSize: 33,
    left: 15,
    bottom: 50,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
  age: {
    color: "white",
    fontSize: 24,
    bottom: 130,
    left: 235,
    fontWeight: "bold",
  },
  female: {
    color: "white",
    fontSize: 30,
    top: 25,
    position: "absolute",
    left: 250,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
  male: {
    color: "white",
    fontSize: 30,
    position: "absolute",
    top: 25,
    left: 280,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
  },
  location: {
    top: 2,
    right: 2,
    fontWeight: "900",
    fontSize: 14,
  },
  darkLocation: {
    top: 2,
    right: 2,
    fontWeight: "900",
    fontSize: 14,
    color: "white",
  },
  animalType: {
    top: 0,
    right: 4,
    paddingRight: 1,
  },
});

function Swipes({ results, willLike, willPass, setType }) {
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

  useEffect(() => {
    setType(results.type);
  }, []);

  return (
    <View style={styles.container}>
      {results.photos[0].full ? (
        <Image source={{ uri: results.photos[0].full }} style={styles.photo} />
      ) : (
        <ActivityIndicator size="large" />
      )}

      <Text style={[styles.name, styles.textShadow]}>
        {nameFilter(results.name)}
      </Text>
      <View style={{ position: "absolute" }}>
        <Text
          style={
            results.gender === "Female"
              ? [styles.female, styles.textShadow]
              : [styles.male, styles.textShadow]
          }
        >
          {results.gender}
        </Text>
      </View>
    </View>
  );
}

export default memo(Swipes);
