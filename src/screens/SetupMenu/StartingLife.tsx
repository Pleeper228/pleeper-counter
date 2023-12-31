import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { setStartingLife } from "../../reducers";
import { CustomText, CustomView, MenuButton } from "../../components";
import { SlideOutLeft, SlideInRight } from "react-native-reanimated";

interface StartingLifeProps {
  onScreenForward: () => void;
}

export const StartingLife = ({ onScreenForward }: StartingLifeProps) => {
  const dispatch = useDispatch();

  const handlePress = useCallback(
    (life: number) => () => {
      dispatch(setStartingLife(life));
      onScreenForward();
    },
    []
  );

  return (
    <CustomView
      entering={SlideInRight.duration(400)}
      exiting={SlideOutLeft.duration(400)}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomText style={{ fontSize: 24, fontWeight: "bold" }}>
        SET STARTING LIFE
      </CustomText>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          paddingTop: 24,
        }}
      >
        <MenuButton label="20" onPress={handlePress(20)} />
        <MenuButton label="30" onPress={handlePress(30)} />
        <MenuButton label="40" onPress={handlePress(40)} />
      </View>
    </CustomView>
  );
};
