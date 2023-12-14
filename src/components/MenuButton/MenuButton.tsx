import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import { CustomPressable } from "../CustomPressable";
import { CustomText } from "../CustomText";
import { colors } from "../../../colors";

interface MenuButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  label: ReactNode;
}

export const MenuButton = ({ label, onPress }: MenuButtonProps) => {
  return (
    <CustomPressable
      onPress={onPress}
      style={{
        borderRadius: 8,
        borderWidth: 2,
        borderColor: colors.secondary,
        height: 96,
        width: 96,
      }}
    >
      <CustomText style={{ color: colors.secondary, fontSize: 40 }}>
        {label}
      </CustomText>
    </CustomPressable>
  );
};
