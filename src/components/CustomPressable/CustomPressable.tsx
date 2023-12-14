import React from "react";
import { Pressable, StyleProp, ViewStyle, PressableProps } from "react-native";
import { colors } from "../../../colors";

interface CustomPressableProps extends Omit<PressableProps, "style"> {
  style?: StyleProp<ViewStyle>;
}

export const CustomPressable = ({
  children,
  style,
  ...rest
}: CustomPressableProps) => (
  <Pressable
    style={({ pressed }) => [
      {
        opacity: pressed ? 0.9 : 1,
        backgroundColor: colors.palette[0],
      },
      {
        padding: 16,
        justifyContent: "center",
        alignItems: "center",
      },
      style,
    ]}
    {...rest}
  >
    {children}
  </Pressable>
);
