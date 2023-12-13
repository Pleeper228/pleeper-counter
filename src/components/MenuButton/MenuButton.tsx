import { ReactNode } from "react";
import { GestureResponderEvent } from "react-native";
import { PressableButton } from "../PressableButton";

interface MenuButtonProps {
  onPress: (e: GestureResponderEvent) => void;
  label: ReactNode;
}

export const MenuButton = ({ label, onPress }: MenuButtonProps) => {
  return (
    <PressableButton
      pressableProps={{
        onPress,
        style: ({ pressed }) => [
          {
            opacity: pressed ? 0.8 : 1,
            backgroundColor: "#2277ee",
          },
          {
            padding: 16,
            marginBottom: 16,
            borderRadius: 8,
          },
        ],
      }}
      textProps={{
        children: label,
        style: { color: "white", fontSize: 48 },
      }}
    />
  );
};
