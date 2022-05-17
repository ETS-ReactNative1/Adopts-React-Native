import React, { useRef, memo } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { LinearGradient } from "expo-linear-gradient";
import Page from "../components/Page";

const OnboardingScreen = ({ navigation }) => {
  const pagerRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <LinearGradient colors={["#16A7E0", "#006994"]}>
          <View key="1">
            <Page
              backgroundColor="transparent"
              iconName="sun"
              imageName={require("../assets/coupledog2.png")}
              title="Welcome to Adopts"
              subtitle="Adopting your next pet just got alot easier!"
            />
            <Text
              style={{
                color: "#3347",
                bottom: -350,
                justifyContent: "center",
                position: "absolute",
                alignSelf: "center",
                fontWeight: "700",
              }}
            >
              Swipe or click to continue
            </Text>
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: -440,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "white",
                width: 200,
                height: 60,
                justifyContent: "center",
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
              }}
              onPress={() => handlePageChange(1)}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontFamily: "Futura",
                }}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#ff0dbf", "#006994"]}>
          <View key="2">
            <Page
              backgroundColor="transparent"
              iconName="eye"
              imageName={require("../assets/girldog.png")}
              title="See the kind of pets you like"
              subtitle="Filter your searches by animal type, gender, age, and breed"
            />
            <View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: -440,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "white",
                  width: 200,
                  height: 60,
                  justifyContent: "center",
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={() => handlePageChange(2)}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Futura",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#c32aff", "#006994"]}>
          <View key="3">
            <Page
              backgroundColor="transparent"
              iconName="check"
              imageName={require("../assets/catgirl.png")}
              title="Find pets near you"
              subtitle="Discover animals available for adoption in your area"
            />
            <View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: -440,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "white",
                  width: 200,
                  height: 60,
                  justifyContent: "center",
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={() => handlePageChange(3)}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Futura",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#16A7E0", "#006994"]}>
          <View key="4">
            <Page
              backgroundColor="transparent"
              iconName="arrow-right"
              imageName={require("../assets/swipe.png")}
              title="Swipe away"
              subtitle={`Swipe right to save to your favorites \n Swipe left to keep browsing`}
            />
            <View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: -440,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "white",
                  width: 200,
                  height: 60,
                  justifyContent: "center",
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={() => handlePageChange(4)}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Futura",
                  }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient colors={["#F2E9EA", "#006994"]}>
          <View key="5">
            <Page
              backgroundColor="transparent"
              imageName={require("../assets/girlrabbit.png")}
              title="Ready to see some cute pets?"
              subtitle="Let's get started by setting your preferences"
            />
            <View>
              <TouchableOpacity
                style={{
                  position: "absolute",
                  bottom: -440,
                  alignSelf: "center",
                  borderWidth: 1,
                  borderColor: "white",
                  width: 200,
                  height: 60,
                  justifyContent: "center",
                  borderTopLeftRadius: 10,
                  borderBottomRightRadius: 10,
                }}
                onPress={() => navigation.navigate("Preferences")}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "Futura",
                  }}
                >
                  Set Preferences
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ViewPager>
    </View>
  );
};

export default memo(OnboardingScreen);
