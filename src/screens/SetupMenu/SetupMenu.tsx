import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import { StartingLife } from "./StartingLife";
import { useNavigation } from "@react-navigation/native";
import { NumberOfPlayers } from "./NumberOfPlayers";
import { RootStackParams } from "../../../App";

export enum MenuPage {
  STARTING_LIFE = 0,
  NUMBER_OF_PLAYERS = 1,
}

export const SetupMenu = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, "SetupMenu">>();
  const [screen, setScreen] = useState(MenuPage.STARTING_LIFE);

  const handleStartingLifeForward = useCallback(() => {
    setScreen(MenuPage.NUMBER_OF_PLAYERS);
  }, []);

  const handleNumberOfPlayersForward = () => {
    navigation.navigate("Main");
  };

  const renderScreen = useCallback((screen: MenuPage) => {
    switch (screen) {
      default:
        return null;
      case MenuPage.STARTING_LIFE:
        return <StartingLife onScreenForward={handleStartingLifeForward} />;
      case MenuPage.NUMBER_OF_PLAYERS:
        return (
          <NumberOfPlayers onScreenForward={handleNumberOfPlayersForward} />
        );
    }
  }, []);

  return renderScreen(screen);
};
