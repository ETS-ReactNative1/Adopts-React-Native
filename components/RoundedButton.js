import React from "react";
import { Text, TouchableOpacity } from "react-native";

const RoundedButton = ({ label, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 60,
        borderWidth: 1,
        borderColor: "white",
        marginBottom: 25,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 22, color: "white", fontWeight: "bold" }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
