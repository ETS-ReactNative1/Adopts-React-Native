import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect, memo } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FilterContext } from "./contexts/FilterContext";
import Main from "./screens/Main";
import Filters from "./screens/Filters";
import Favorites from "./screens/Favorites";
import UserSettings from "./screens/UserSettings";
import SplashScreen from "./screens/Splash";
import SetGender from "./screens/SetGender";
import SetAge from "./screens/SetAge";
import SetLocation from "./screens/SetLocation";
import { Client } from "@petfinder/petfinder-js";
import SetPreferences from "./screens/SetPreferences";
import OnboardingScreen from "./screens/Onboarding";

const Stack = createNativeStackNavigator();

const key = "p7rNFI2gUIoYHCWJMUUA5BAOoirnSfP30Dpny8c4ajQDtHPkyV";
const secret = "qAj2b76OKxznkKYP8RNfgpjJZxu3Kts8irMRf3qy";
// const key = "TzQe0DtZ8F1RkqwSU9LJlbZJVqZtmY5eGYXwXke4OeJWQyIRAD";
// const secret = "SxgQl0TYNDgtpglpBPGGmugrWFsz27ebjFWJmEVV";

const client = new Client({ apiKey: key, secret: secret });

function App() {
  const [loading, setLoading] = useState(true);
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  const [updateSettings, setUpdateSettings] = useState(false);
  const [results, setResults] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currIndex, setCurrIndex] = useState(0);
  const [currType, setCurrType] = useState(animalType);
  const [animalType, setAnimalType] = useState("");
  const [location, setLocation] = useState(90023);
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [breed, setBreed] = useState("");
  const [savedAnimalType, setSavedAnimalType] = useState("");
  const [savedLocation, setSavedLocation] = useState(null);
  const [savedAge, setSavedAge] = useState("");
  const [savedGender, setSavedGender] = useState("");
  const [savedBreed, setSavedBreed] = useState("");
  const [darkModeOn, setDarkModeOn] = useState(false);

  const Onboarding = () => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(true);
      }
    });
  };

  useEffect(() => {
    Onboarding();
    if (updateSettings === true) {
      removeBreed();
      removeAnimalType();
    } else {
      loadAnimalType();
      loadAge();
      loadLocation();
      loadAnimalType();
      loadGender();
      loadBreed();
    }
  }, []);

  const fetchSavedAnimals = () => {
    client.animal
      .search({
        type: savedAnimalType,
        limit: "100",
        location: location,
        age: savedAge,
        gender: savedGender,
        breed: savedBreed,
      })
      .then((response) => {
        console.log(breed);
        const res = response.data.animals;
        const filtered = [];

        for (let i = 0; i < res.length; i++) {
          if (res[i].photos && res[i].photos[0] && res[i].photos[0].full) {
            filtered.push(res[i]);
          }
        }
        setLoading(true);
        setResults(filtered);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const fetchAnimals = () => {
    client.animal
      .search({
        type: animalType,
        limit: "100",
        location: location,
        age: age,
        gender: gender,
        breed: breed,
      })
      .then((response) => {
        console.log(breed);
        const res = response.data.animals;
        const filtered = [];

        for (let i = 0; i < res.length; i++) {
          if (res[i].photos && res[i].photos[0] && res[i].photos[0].full) {
            filtered.push(res[i]);
          }
        }
        setLoading(true);
        setResults(filtered);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const loadLocation = async () => {
    try {
      let userLocation = await AsyncStorage.getItem("Location");
      if (location != null) {
        setLocation(parseInt(userLocation));
      }
    } catch (err) {
      alert(err);
    }
  };

  const saveAnimalType = async () => {
    try {
      await AsyncStorage.setItem("AnimalType", savedAnimalType);
      console.log("AnimalType", animalType);
    } catch (err) {
      alert(err);
    }
  };

  const loadAnimalType = async () => {
    try {
      let type = await AsyncStorage.getItem("AnimalType");
      if (type != null) {
        setSavedAnimalType(type);
      }
      console.log(type);
    } catch (err) {
      alert(err);
    }
  };

  const saveGender = async () => {
    try {
      await AsyncStorage.setItem("Gender", savedGender);
    } catch (err) {
      alert(err);
    }
  };

  const loadGender = async () => {
    try {
      let animalGender = await AsyncStorage.getItem("Gender");
      if (animalGender != null) {
        setSavedGender(animalGender);
      }
    } catch (err) {
      alert(err);
    }
  };

  const saveBreed = async () => {
    try {
      await AsyncStorage.setItem("Breed", savedBreed);
    } catch (err) {
      alert(err);
    }
  };

  const loadBreed = async () => {
    try {
      let animalBreed = await AsyncStorage.getItem("Breed");
      if (animalBreed != null) {
        setSavedBreed(animalBreed);
      }
    } catch (err) {
      alert(err);
    }
  };

  const saveAge = async () => {
    try {
      await AsyncStorage.setItem("Age", savedAge);
    } catch (err) {
      alert(err);
    }
  };

  const loadAge = async () => {
    try {
      let animalAge = await AsyncStorage.getItem("Age");
      if (age != null) {
        setSavedAge(animalAge);
      }
    } catch (err) {
      alert(err);
    }
  };

  const saveFavorites = async (value) => {
    try {
      await AsyncStorage.setItem("Favorites", JSON.stringify(value));
      console.log(value);
    } catch (err) {
      alert(err);
    }
  };

  const loadFavorites = async () => {
    try {
      let favorites = await AsyncStorage.getItem("Favorites");
      if (favorites != null) {
        setFavorites(JSON.parse(favorites));
      }
    } catch (err) {
      alert(err);
    }
  };

  const removeFavorites = async (id) => {
    try {
      let favsJSON = await AsyncStorage.getItem("Favorites");
      let favsArray = JSON.parse(favsJSON);
      let alteredFavs = favsArray.filter((fav) => fav.id !== id);
      AsyncStorage.setItem("Favorites", JSON.stringify(alteredFavs));
      setFavorites(alteredFavs);
    } catch (error) {
      console.log(error);
    }
  };

  // const saveOnboarding = async () => {
  //   try {
  //     let value = onboarding === false ? "false" : "true";
  //     await AsyncStorage.setItem("Onboarding", value);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  // const loadOnboarding = async () => {
  //   try {
  //     let onboard = await AsyncStorage.getItem("Onboarding");
  //     let value = onboard === "false" ? false : true;
  //     console.log("on", false);
  //     setOnboarding(value);
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  const saveLocation = async () => {
    try {
      await AsyncStorage.setItem("Location", location.toString());
    } catch (err) {
      alert(err);
    }
  };

  const saveDarkMode = () => {
    let value = darkModeOn ? "false" : "true";
    AsyncStorage.setItem("DarkMode", value);
    console.log("DarkMode", value);
  };

  const loadDarkMode = async () => {
    try {
      let darkMode = await AsyncStorage.getItem("DarkMode");
      let value = darkMode === "true" ? true : false;
      setDarkModeOn(value);
    } catch (err) {
      alert(err);
    }
  };

  const removeDarkMode = async () => {
    try {
      await AsyncStorage.removeItem("DarkMode");
    } catch (err) {
      alert(err);
    } finally {
      setDarkModeOn(false);
    }
  };

  const removeBreed = async () => {
    try {
      await AsyncStorage.removeItem("Breed");
    } catch (err) {
      alert(err);
    } finally {
      setSavedBreed("");
    }
  };

  const removeAnimalType = async () => {
    try {
      await AsyncStorage.removeItem("AnimalType");
    } catch (err) {
      alert(err);
    } finally {
      setSavedAnimalType("");
    }
  };

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <FilterContext.Provider
        value={{
          fetchAnimals,
          results,
          animalType,
          location,
          age,
          gender,
          setAnimalType,
          setLocation,
          setAge,
          setGender,
          favorites,
          setFavorites,
          currIndex,
          setCurrIndex,
          breed,
          setBreed,
          darkModeOn,
          setDarkModeOn,
          saveFavorites,
          loadFavorites,
          removeFavorites,
          saveDarkMode,
          loadDarkMode,
          loading,
          setLoading,
          saveLocation,
          saveAge,
          loadLocation,
          loadAge,
          removeDarkMode,
          saveAnimalType,
          loadAnimalType,
          currType,
          setCurrType,
          saveGender,
          loadGender,
          saveBreed,
          loadBreed,
          removeBreed,
          savedAnimalType,
          setSavedAnimalType,
          savedLocation,
          setSavedLocation,
          savedAge,
          setSavedAge,
          savedGender,
          setSavedGender,
          savedBreed,
          setSavedBreed,
          fetchSavedAnimals,
          updateSettings,
          setUpdateSettings,
          isFirstLaunch,
          setIsFirstLaunch,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={"Onboarding"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Onboarding" component={OnboardingScreen} />
            <Stack.Screen name="Preferences" component={SetPreferences} />
            <Stack.Screen name="SetGender" component={SetGender} />
            <Stack.Screen name="SetAge" component={SetAge} />
            <Stack.Screen name="SetLocation" component={SetLocation} />
          </Stack.Navigator>
        </NavigationContainer>
      </FilterContext.Provider>
    );
  } else {
    return (
      <FilterContext.Provider
        value={{
          fetchAnimals,
          results,
          animalType,
          location,
          age,
          gender,
          setAnimalType,
          setLocation,
          setAge,
          setGender,
          favorites,
          setFavorites,
          currIndex,
          setCurrIndex,
          breed,
          setBreed,
          darkModeOn,
          setDarkModeOn,
          saveFavorites,
          loadFavorites,
          removeFavorites,
          saveDarkMode,
          loadDarkMode,
          loading,
          setLoading,
          saveLocation,
          saveAge,
          loadLocation,
          loadAge,
          removeDarkMode,
          saveAnimalType,
          loadAnimalType,
          currType,
          setCurrType,
          saveGender,
          loadGender,
          saveBreed,
          loadBreed,
          removeBreed,
          savedAnimalType,
          setSavedAnimalType,
          savedLocation,
          setSavedLocation,
          savedAge,
          setSavedAge,
          savedGender,
          setSavedGender,
          savedBreed,
          setSavedBreed,
          fetchSavedAnimals,
          updateSettings,
          setUpdateSettings,
          isFirstLaunch,
          setIsFirstLaunch,
        }}
      >
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={"Main"}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Filters" component={Filters} />
            <Stack.Screen name="Favorites" component={Favorites} />
            <Stack.Screen name="UserSettings" component={UserSettings} />
          </Stack.Navigator>
        </NavigationContainer>
      </FilterContext.Provider>
    );
  }
}

export default memo(App);
