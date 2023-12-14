import React from "react";
import { View } from "react-native";
import { CenterButton, Counter } from "../../../components";
import { colors } from "../../../../colors";

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
        borderTopLeftRadius: 48,
        borderBottomLeftRadius: 48,
        overflow: "hidden",
      }}
    >
      <Counter orientation="left" backgroundColor={colors.palette[1]} />
      <Counter orientation="left" backgroundColor={colors.palette[2]} />
    </View>
    <View
      style={{
        flex: 1,
        gap: 8,
        borderTopRightRadius: 48,
        borderBottomRightRadius: 48,
        overflow: "hidden",
      }}
    >
      <Counter orientation="right" backgroundColor={colors.palette[4]} />
      <Counter orientation="right" backgroundColor={colors.palette[5]} />
    </View>
    <CenterButton />
  </View>
);
