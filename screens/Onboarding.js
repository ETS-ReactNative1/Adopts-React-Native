import React, { useRef } from "react";
import { View } from "react-native";
import ViewPager from "@react-native-community/viewpager";

import Page from "../components/Page";
import Footer from "../components/Footer";

const Onboarding = ({ navigation }) => {
  const pagerRef = useRef(null);

  const handlePageChange = (pageNumber) => {
    pagerRef.current.setPage(pageNumber);
  };

  return (
    <View style={{ flex: 1 }}>
      <ViewPager style={{ flex: 1 }} initialPage={0} ref={pagerRef}>
        <View key="1">
          <Page
            backgroundColor="lightskyblue"
            iconName="sun"
            imageName={require("../assets/coupledog2.png")}
            title="Welcome to Adopts"
            subtitle="Adopting your next pet just got alot easier!"
          />
          <Footer
            backgroundColor="lightskyblue"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(1);
            }}
          />
        </View>
        <View key="2">
          <Page
            backgroundColor="#ff0dbf"
            iconName="eye"
            imageName={require("../assets/girldog.png")}
            title="See the kind of pets you like"
            subtitle="Filter your searches by animal type, gender, age, and breed"
          />
          <Footer
            backgroundColor="#ff0dbf"
            // leftButtonLabel="Back"
            // leftButtonPress={() => {
            //   handlePageChange(0);
            // }}
            rightButtonLabel="Continue"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(2);
            }}
          />
        </View>
        <View key="3">
          <Page
            backgroundColor="#c32aff"
            iconName="check"
            imageName={require("../assets/catgirl.png")}
            title="Find pets near you"
            subtitle="We'll show you all the animals in your local animal shelters"
          />
          <Footer
            backgroundColor="#c32aff"
            // leftButtonLabel="Back"
            // leftButtonPress={() => {
            //   handlePageChange(1);
            // }}
            rightButtonLabel="Continue"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(3);
            }}
          />
        </View>
        <View key="4">
          <Page
            backgroundColor="lightskyblue"
            iconName="arrow-right"
            imageName={require("../assets/swipe.png")}
            title="Swipe away"
            subtitle="Swipe right to save to your favorites, swipe left to keep browsing"
          />
          <Footer
            backgroundColor="lightskyblue"
            // leftButtonLabel="Back"
            // leftButtonPress={() => {
            //   handlePageChange(1);
            // }}
            rightButtonLabel="Continue"
            rightButtonLabel="Next"
            rightButtonPress={() => {
              handlePageChange(3);
            }}
          />
        </View>
        <View key="5">
          <Page
            backgroundColor="dodgerblue"
            imageName={require("../assets/girlrabbit.png")}
            title="Let's get started by setting your preferences"
            subtitle=""
          />
          <Footer
            backgroundColor="dodgerblue"
            rightButtonLabel="Continue"
            rightButtonPress={() => {
              navigation.navigate("Preferences");
            }}
          />
        </View>
      </ViewPager>
    </View>
  );
};

export default Onboarding;
