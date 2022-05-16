import React, { useContext, memo } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  ScrollView,
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
    alignSelf: "center",
    color: "#006994",
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
});

function SetGender({ navigation }) {
  const {
    darkModeOn,
    saveLocation,
    saveAge,
    age,
    animalType,
    setAnimalType,
    setAge,
    fetchAnimals,
    saveAnimalType,
    setLocation,
    gender,
    setGender,
    saveGender,
    breed,
    setBreed,
    saveBreed,
    setSavedAnimalType,
    setSavedLocation,
    setSavedAge,
    setSavedGender,
    setSavedBreed,
    fetchSavedAnimals,
    setUpdateSettings,
    savedAnimalType,
    savedBreed,
    savedAge,
    savedGender,
    setInitialLoad,
    setOnboarding,
    saveOnboarding,
  } = useContext(FilterContext);

  const handleNext = () => {
    saveGender();
    navigation.navigate("SetAge");
  };
  return (
    <View style={darkModeOn ? styles.darkMode : styles.container}>
      <View style={styles.form}>
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
          style={darkModeOn ? styles.darkModeAnimalType : styles.animalText}
        >
          Set default gender
        </Text>
        <Picker
          selectedValue={savedGender}
          onValueChange={(currentGender) => setSavedGender(currentGender)}
          style={darkModeOn ? styles.darkModePickerText : styles.pickerText}
        >
          <Picker.Item label="Any" value="" />
          <Picker.Item label="Male" value="Male" />
          <Picker.Item label="Female" value="Female" />
        </Picker>

        <View style={{ marginVertical: 170 }}>
          <Button
            title="Save"
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

export default memo(SetGender);
