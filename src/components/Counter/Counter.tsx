import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import { View, ColorValue, FlexStyle, RotateTransform } from "react-native";
import { useSelector } from "react-redux";
import { selectStartingLife } from "../../reducers";
import { CustomText } from "../CustomText";
import { CounterButton } from "./CounterButton";

const fontSize = 48;

type Orientation = "up" | "down" | "left" | "right";

export interface CounterProps {
  orientation: Orientation;
  backgroundColor: ColorValue;
}

const getFlexDirection = (
  orientation: Orientation
): FlexStyle["flexDirection"] | undefined => {
  switch (orientation) {
    default:
    case "down":
      return;
    case "up":
      return "column-reverse";
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
  const [delta, setDelta] = useState(0);
  const [count, setCount] = useState(startingLife);

  const resetDelta = useCallback(
    debounce(() => setDelta(0), 1000),
    []
  );

  const handleUpCounter = useCallback(() => {
    setDelta(delta + 1);
    setCount(count + 1);
    resetDelta();
  }, [delta, count, resetDelta]);
  const handleDownCounter = useCallback(() => {
    setDelta(delta - 1);
    setCount(count - 1);
    resetDelta();
  }, [delta, count, resetDelta]);

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
      <CounterButton
        top
        backgroundColor={backgroundColor}
        delta={delta}
        onCount={handleUpCounter}
        rotate={getRotation(orientation)}
      />
      <View style={{ position: "absolute", zIndex: 1 }}>
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
      <CounterButton
        backgroundColor={backgroundColor}
        delta={delta}
        onCount={handleDownCounter}
        rotate={getRotation(orientation)}
      />
    </View>
  );
};
