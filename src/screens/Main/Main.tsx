import React, { useCallback } from "react";
import { FourPlayer, TwoPlayer } from "./layouts";
import { useSelector } from "react-redux";
import { selectNumberOfPlayers } from "../../reducers";
import { colors } from "../../../colors";
import { CustomView } from "../../components";
import { SlideInRight, FadeOut } from "react-native-reanimated";

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
    <CustomView
      entering={SlideInRight.duration(400)}
      exiting={FadeOut.duration(400)}
      style={{ flex: 1, backgroundColor: colors.secondary }}
    >
      {renderMain()}
    </CustomView>
  );
};
