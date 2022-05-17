import React from "react";
import { View, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { get } from "react-hook-form";

const Page = ({ backgroundColor, imageName, iconName, title, subtitle }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginTop: 320,
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Icon
        name={iconName}
        size={120}
        color="white"
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 25,
          marginBottom: 20,
        }}
      />
      <Image
        source={imageName}
        style={{
          width: 350,
          height: 350,
          marginTop: 100,
          alignItems: "center",
        }}
      />
      <View style={{ marginTop: 0 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "white",
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            padding: 25,
            textAlign: "center",
            fontFamily: "Futura",
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{ marginTop: 70, width: 350, height: 100, overflow: "visible" }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "800",
            color: "white",
            padding: 15,
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textAlign: "center",
            fontFamily: "Futura",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Page;
