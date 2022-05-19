import React, { useContext, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Image,
} from "react-native";
import { FilterContext } from "../contexts/FilterContext";
import { Picker } from "@react-native-picker/picker";
import Button from "react-native-button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2E9EA",
  },
  text: {
    color: "black",
    top: 40,
    marginLeft: 15,
    fontWeight: "900",
    fontSize: 18,
  },
  darkModeText: {
    color: "white",
    top: 40,
    marginLeft: 15,
    fontWeight: "900",
    fontSize: 18,
  },
  locationText: {
    borderTopWidth: 1,
    borderTopColor: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 330,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: "#006994",
    marginBottom: 20,
    borderRadius: 10,
    padding: 12,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  darkModeInput: {
    width: 330,
    marginLeft: 5,
    borderWidth: 1,
    borderColor: "lightskyblue",
    marginBottom: 20,
    borderRadius: 10,
    padding: 7,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 0,
    color: "white",
  },
  darkModeAnimalType: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 10,
    paddingTop: 5,
    top: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "lightskyblue",
    borderTopWidth: 1,
    borderTopColor: "white",
  },
  darkModeAnimalTypeTop: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 10,
    top: 30,
    fontSize: 16,
    fontWeight: "bold",
    color: "lightskyblue",
  },
  animalText: {
    marginTop: 50,
    marginLeft: 10,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#006994",
    alignSelf: "center",
  },
  pickerText: {
    marginTop: 5,
    marginBottom: -30,
    marginLeft: 3,
    color: "#000",
  },
  darkModePickerText: {
    top: 30,
    marginLeft: 8,
    marginBottom: 0,
    color: "white",
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  form: {
    flex: 1,
    marginTop: 50,
    padding: 20,
  },
  image: {
    height: 200,
    width: 200,
    backgroundColor: "white",
    borderRadius: 10,
    top: 0,
    marginTop: 40,
    left: 0,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
  },
});

function SetPreferences({ navigation }) {
  const { darkModeOn, saveAnimalType, setSavedAnimalType, savedAnimalType } =
    useContext(FilterContext);

  const handleNext = () => {
    saveAnimalType();
    navigation.navigate("SetGender");
  };

  return (
    <View
      style={darkModeOn ? styles.darkMode : styles.container}
      onTouchStart={Keyboard.dismiss}
    >
      <View style={styles.form} onTouchStart={Keyboard.dismiss}>
        <Text
          style={{
            marginTop: 30,
            marginLeft: 12,
            fontSize: 25,
            alignSelf: "center",
          }}
        >
          Set your preferences
        </Text>
        <Text
          style={darkModeOn ? styles.darkModeAnimalTypeTop : styles.animalText}
        >
          Set default animal type
        </Text>
        <Picker
          selectedValue={savedAnimalType}
          onValueChange={(current) => setSavedAnimalType(current)}
          style={darkModeOn ? styles.darkModePickerText : styles.pickerText}
        >
          <Picker.Item label="All" value="" />
          <Picker.Item label="Dogs" value="Dog" />
          <Picker.Item label="Cats" value="Cat" />
          <Picker.Item label="Rabbits" value="Rabbit" />
          <Picker.Item label="Birds" value="Bird" />
        </Picker>

        <View>
          {savedAnimalType === "Dog" ? (
            <Image
              source={require("../assets/Dog1.png")}
              style={styles.image}
            ></Image>
          ) : savedAnimalType === "Cat" ? (
            <Image
              source={require("../assets/Cat1.png")}
              style={styles.image}
            ></Image>
          ) : savedAnimalType === "Rabbit" ? (
            <Image
              source={require("../assets/Rabbit1.png")}
              style={styles.image}
            ></Image>
          ) : savedAnimalType === "Bird" ? (
            <Image
              source={require("../assets/Bird1.png")}
              style={styles.image}
            ></Image>
          ) : null}
        </View>

        <View style={{ marginVertical: 80 }}>
          <Button
            title="Next"
            onPress={handleNext}
            style={{ fontSize: 20, color: "white" }}
            containerStyle={{
              padding: 10,
              height: 50,
              borderRadius: 15,
              overflow: "hidden",
              justifyContent: "center",
              backgroundColor: darkModeOn ? "lightskyblue" : "#006994",
            }}
          >
            {" "}
            Next
          </Button>
        </View>
      </View>
    </View>
  );
}

export default memo(SetPreferences);
