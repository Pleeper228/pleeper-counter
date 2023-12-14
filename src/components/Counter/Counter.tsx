import { debounce } from "lodash";
import React, { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View, ColorValue, FlexStyle, RotateTransform } from "react-native";
import { useSelector } from "react-redux";
import { selectCounts, setCount } from "../../reducers";
import { CustomText } from "../CustomText";
import { CounterButton } from "./CounterButton";
import { useDispatch } from "react-redux";
import { colors } from "../../../colors";

const fontSize = 40;

type Orientation = "up" | "down" | "left" | "right";

export interface CounterProps {
  playerIndex: number;
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

export const Counter = ({
  playerIndex,
  backgroundColor,
  orientation,
}: CounterProps) => {
  const dispatch = useDispatch();
  const count = useSelector(selectCounts)[playerIndex];
  const [delta, setDelta] = useState(0);

  const resetDelta = useCallback(
    debounce(() => setDelta(0), 1000),
    []
  );

  const handleUpCounter = useCallback(() => {
    setDelta(delta + 1);
    dispatch(setCount({ playerIndex, count: count + 1 }));
    resetDelta();
  }, [delta, count, resetDelta]);
  const handleDownCounter = useCallback(() => {
    setDelta(delta - 1);
    dispatch(setCount({ playerIndex, count: count - 1 }));
    resetDelta();
  }, [delta, count, resetDelta]);

  return (
    <View
      style={{
        flex: 1,
        width: "100%",
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
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          transform: [{ rotate: getRotation(orientation) }],
          alignItems: "center",
        }}
      >
        <CustomText
          style={{
            fontSize,
            color: colors.secondary,
          }}
        >
          {count}
        </CustomText>
        <Ionicons name="heart" size={24} color={colors.secondary} />
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
