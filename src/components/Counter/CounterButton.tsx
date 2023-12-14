import { View, Pressable, RotateTransform } from "react-native";
import type { CounterProps } from "./Counter";
import { CustomText } from "../CustomText";
import { useMemo } from "react";

interface CounterButtonProps extends Pick<CounterProps, "backgroundColor"> {
  top?: boolean;
  delta: number;
  onCount: () => void;
  rotate: RotateTransform["rotate"];
}

export const CounterButton = ({
  top = false,
  onCount,
  delta,
  rotate,
  backgroundColor,
}: CounterButtonProps) => {
  const showDelta = useMemo(
    () =>
      (!!delta && Math.abs(delta) === delta && top) ||
      (Math.abs(delta) !== delta && !top),
    [delta, top]
  );

  return (
    <Pressable
      style={{
        flex: 1,
        width: "100%",
        backgroundColor,
      }}
      onPressOut={onCount}
    >
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {showDelta && (
          <CustomText
            style={{
              fontSize: 16,
              transform: [{ rotate }],
            }}
          >
            {Math.abs(delta) === delta ? "+" : "-"}
            {delta}
          </CustomText>
        )}
      </View>
    </Pressable>
  );
};
