import React from "react";
import { View } from "react-native";
import { CenterButton, Counter } from "../../../components";
import { colors } from "../../../../colors";

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
    <View
      style={{
        flex: 1,
        width: "100%",
        borderTopLeftRadius: 48,
        borderTopRightRadius: 48,
        overflow: "hidden",
      }}
    >
      <Counter orientation="up" backgroundColor={colors.palette[1]} />
    </View>
    <View
      style={{
        flex: 1,
        width: "100%",
        borderBottomLeftRadius: 48,
        borderBottomRightRadius: 48,
        overflow: "hidden",
      }}
    >
      <Counter orientation="down" backgroundColor={colors.palette[4]} />
    </View>
    <CenterButton />
  </View>
);
