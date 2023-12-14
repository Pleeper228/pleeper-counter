import React from "react";
import { Pressable, TextProps, PressableProps } from "react-native";
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
