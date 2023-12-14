import React from "react";
import { View } from "react-native";
import { CenterButton, Counter } from "../../../components";

export const FourPlayer = () => (
  <View
    style={{
      flex: 1,
      padding: 8,
      gap: 8,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <View
      style={{
        flex: 1,
        gap: 8,
      }}
    >
      <Counter orientation="left" backgroundColor="blue" />
      <Counter orientation="left" backgroundColor="red" />
    </View>
    <View
      style={{
        flex: 1,
        gap: 8,
      }}
    >
      <Counter orientation="right" backgroundColor="black" />
      <Counter orientation="right" backgroundColor="orange" />
    </View>
    <CenterButton />
  </View>
);
