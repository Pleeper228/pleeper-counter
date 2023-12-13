import React, { useState } from "react";
import {
  View,
  Pressable,
  ColorValue,
  FlexStyle,
  RotateTransform,
} from "react-native";
import { useSelector } from "react-redux";
import { selectStartingLife } from "../../reducers";
import { CustomText } from "../CustomText";

const fontSize = 50;

type Orientation = "up" | "down" | "left" | "right";

interface CounterProps {
  orientation: Orientation;
  backgroundColor: ColorValue;
}

const getFlexDirection = (
  orientation: Orientation
): FlexStyle["flexDirection"] | undefined => {
  switch (orientation) {
    default:
    case "down":
    case "up":
      return;
    case "left":
      return "row-reverse";
    case "right":
      return "row";
  }
};
const getRotation = (orientation: Orientation): RotateTransform["rotate"] => {
  switch (orientation) {
    default:
    case "down":
      return "0deg";
    case "left":
      return "90deg";
    case "up":
      return "180deg";
    case "right":
      return "270deg";
  }
};

export const Counter = ({ backgroundColor, orientation }: CounterProps) => {
  const startingLife = useSelector(selectStartingLife);
  const [count, setCount] = useState(startingLife);
  const handleUpCounter = () => setCount(count + 1);
  const handleDownCounter = () => setCount(count - 1);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: getFlexDirection(orientation),
      }}
    >
      <Pressable
        style={{
          height: "100%",
          width: "100%",
          backgroundColor,
        }}
        onPressOut={orientation === "up" ? handleDownCounter : handleUpCounter}
      ></Pressable>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <CustomText
          style={{
            fontSize,
            color: "white",
            transform: [{ rotate: getRotation(orientation) }],
          }}
        >
          {count}
        </CustomText>
      </View>
      <Pressable
        style={{
          height: "100%",
          width: "100%",
          backgroundColor,
        }}
        onPressOut={orientation === "up" ? handleUpCounter : handleDownCounter}
      ></Pressable>
    </View>
  );
};
