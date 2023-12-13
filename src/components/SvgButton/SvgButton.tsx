import React from "react";
import { TouchableHighlight, View, GestureResponderEvent } from "react-native";
import Svg, { Path } from "react-native-svg";

interface SvgButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  size: number;
}

export const SvgButton = ({ onPress, size }: SvgButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size}>
          <Path
            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
            fill="#fff"
          />
        </Svg>
      </View>
    </TouchableHighlight>
  );
};
