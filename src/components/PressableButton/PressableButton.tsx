import React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TextProps,
  PressableProps,
} from "react-native";
import { CustomText } from "../CustomText";

interface PressableButtonProps {
  textProps: TextProps;
  pressableProps: PressableProps;
}

export const PressableButton = ({
  textProps,
  pressableProps,
}: PressableButtonProps) => {
  return (
    <Pressable {...pressableProps}>
      <CustomText {...textProps}></CustomText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
    borderRadius: 6,
  },
  buttonText: {
    marginTop: 10,
    marginLeft: 20,
    fontSize: 20,
  },
});
