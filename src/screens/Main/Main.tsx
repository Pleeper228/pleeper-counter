import React, { useCallback } from "react";
import { FourPlayer, TwoPlayer } from "./layouts";
import { useSelector } from "react-redux";
import { selectNumberOfPlayers } from "../../reducers";
import { View } from "react-native";
import { colors } from "../../../colors";

export const Main = () => {
  const numberOfPlayers = useSelector(selectNumberOfPlayers);

  const renderMain = useCallback(() => {
    switch (numberOfPlayers) {
      default:
      case 2:
        return <TwoPlayer />;
      case 4:
        return <FourPlayer />;
    }
  }, [numberOfPlayers]);

  return (
    <View style={{ flex: 1, backgroundColor: colors.secondary }}>
      {renderMain()}
    </View>
  );
};
