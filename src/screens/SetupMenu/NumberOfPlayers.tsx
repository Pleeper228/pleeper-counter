import React, { useCallback } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { setNumberOfPlayers } from "../../reducers";
import { CustomText, CustomView, MenuButton } from "../../components";
import { SlideInRight, SlideOutLeft } from "react-native-reanimated";

interface NumberOfPlayersProps {
  onScreenForward: () => void;
}

export const NumberOfPlayers = ({ onScreenForward }: NumberOfPlayersProps) => {
  const dispatch = useDispatch();

  const handlePress = useCallback(
    (numberOfPlayers: number) => () => {
      dispatch(setNumberOfPlayers(numberOfPlayers));
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
        SET NUMBER OF PLAYERS
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
        <MenuButton label="2" onPress={handlePress(2)} />
        <MenuButton label="4" onPress={handlePress(4)} />
      </View>
    </CustomView>
  );
};
