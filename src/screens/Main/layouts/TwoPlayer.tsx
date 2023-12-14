import React from "react";
import { View } from "react-native";
import { CenterButton, Counter } from "../../../components";

export const TwoPlayer = () => (
  <View
    style={{
      flex: 1,
      padding: 8,
      gap: 8,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Counter orientation="up" backgroundColor="blue" />
    <Counter orientation="down" backgroundColor="red" />
    <CenterButton />
  </View>
);
