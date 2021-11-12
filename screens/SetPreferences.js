import React, { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { FilterContext } from "../contexts/FilterContext";
import { Picker } from "@react-native-picker/picker";
import Button from "react-native-button";

export default function SetPreferences({ navigation }) {
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

  const handleSubmit = () => {
    saveAnimalType();
    saveAge();
    saveLocation();
    saveGender();
    saveBreed();
    setUpdateSettings(true);
    setInitialLoad(false);
    setOnboarding(false);
    saveOnboarding();
    fetchSavedAnimals();
    navigation.replace("Main");
  };
  return (
    <View style={darkModeOn ? styles.darkMode : styles.container}>
      <View style={styles.form}>
        <Text style={{ marginTop: 30, marginLeft: 12, fontSize: 25 }}>
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

        <Text
          style={darkModeOn ? styles.darkModeAnimalType : styles.animalText}
        >
          Set default age
        </Text>
        <Picker
          selectedValue={savedAge}
          onValueChange={(currentAge) => setSavedAge(currentAge)}
          style={darkModeOn ? styles.darkModePickerText : styles.pickerText}
        >
          <Picker.Item label="Any" value="" />
          <Picker.Item label="Adult" value="Adult" />
          <Picker.Item label="Young" value="Baby" />
        </Picker>

        {/* <Text
          style={darkModeOn ? styles.darkModeAnimalType : styles.animalText}
        >
          Set default breed
        </Text>
        {animalType == "Dog" || animalType == ""
          ? dogBreeds()
          : animalType == "Cat"
          ? catBreeds()
          : animalType == "Rabbit"
          ? rabbitBreeds()
          : ""} */}

        <Text
          style={{
            marginTop: 40,
            marginLeft: 10,
            marginBottom: 10,
            paddingTop: 20,
            fontSize: 16,
            fontWeight: "bold",
            color: darkModeOn ? "lightskyblue" : "dodgerblue",
            borderTopWidth: 1,
            borderTopColor: "white",
          }}
        >
          Set default location
        </Text>

        <TextInput
          style={darkModeOn ? styles.darkModeInput : styles.input}
          name="location"
          onChangeText={(text) => setLocation(text)}
          placeholder="Zip Code"
          placeholderTextColor={darkModeOn ? "white" : "black"}
        />

        <View style={{ marginVertical: 170 }}>
          <Button
            title="Save"
            onPress={handleSubmit}
            style={{ fontSize: 20, color: "white" }}
            containerStyle={{
              padding: 10,
              height: 50,
              borderRadius: 15,
              overflow: "hidden",
              backgroundColor: darkModeOn
                ? "lightskyblue"
                : "rgba(38, 64, 179, 0.842)",
            }}
          >
            {" "}
            Save
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
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
    width: 330,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: "rgba(38, 64, 179, 0.842)",
    marginBottom: 20,
    borderRadius: 10,
    padding: 7,
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
    color: "dodgerblue",
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
