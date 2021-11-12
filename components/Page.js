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
        marginTop: getStatusBarHeight(),
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
          marginTop: 0,
          alignItems: "center",
        }}
      />
      <View style={{ marginTop: 0 }}>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "bold",
            color: "white",
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            padding: 30,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
      </View>
      <View style={{ marginTop: -25 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "white",
            padding: 15,
            textShadowColor: "rgba(0, 0, 0, 0.25)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
            textAlign: "center",
          }}
        >
          {subtitle}
        </Text>
      </View>
    </View>
  );
};

export default Page;
