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
    height: 50,
    width: 330,
    borderWidth: 1,
    marginLeft: 10,
    borderColor: "#006994",
    marginBottom: 20,
    top: 80,
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
    alignSelf: "center",
    fontWeight: "bold",
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

function SetLocation({ navigation }) {
  const {
    darkModeOn,
    saveLocation,
    setLocation,
    fetchSavedAnimals,
    setUpdateSettings,
    setIsFirstLaunch,
  } = useContext(FilterContext);

  const handleSubmit = () => {
    saveLocation();
    setIsFirstLaunch(false);
    setUpdateSettings(true);
    fetchSavedAnimals();
    navigation.replace("Main");
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

        <View>
          <Text
            style={{
              marginTop: 20,
              marginLeft: 10,
              marginBottom: 30,
              paddingTop: 20,
              fontSize: 16,
              fontWeight: "bold",
              color: darkModeOn ? "lightskyblue" : "#006994",
              borderTopWidth: 1,
              borderTopColor: "white",
              alignSelf: "center",
            }}
          >
            Set default location
          </Text>

          <TextInput
            style={darkModeOn ? styles.darkModeInput : styles.input}
            name="location"
            onChangeText={(text) => setLocation(text)}
            placeholder="Zip Code"
            placeholderTextColor={darkModeOn ? "white" : "#006994"}
            autoFocus={true}
          />
        </View>

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
              justifyContent: "center",
              backgroundColor: darkModeOn ? "lightskyblue" : "#006994",
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

export default memo(SetLocation);
