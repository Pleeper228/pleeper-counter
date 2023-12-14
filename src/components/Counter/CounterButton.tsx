import { RotateTransform, View } from "react-native";
import type { CounterProps } from "./Counter";
import { CustomText } from "../CustomText";
import { useMemo } from "react";
import { colors } from "../../../colors";
import { CustomPressable } from "../CustomPressable";
import { FadeIn, FadeOut } from "react-native-reanimated";

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
    <CustomPressable
      onPressOut={onCount}
      style={{
        flex: 1,
        width: "100%",
        backgroundColor,
      }}
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
            entering={FadeIn.duration(100)}
            exiting={FadeOut.duration(200)}
            style={{
              fontSize: 16,
              transform: [{ rotate }],
              color: colors.secondary,
            }}
          >
            {Math.abs(delta) === delta ? "+" : "-"}
            {delta}
          </CustomText>
        )}
      </View>
    </CustomPressable>
  );
};
