import React, { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, View } from "react-native";
import { CustomText } from "../CustomText";
import { MenuButton } from "../MenuButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { useDispatch } from "react-redux";
import { reset } from "../../reducers";

export const CenterButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setShowMenu(true);
  }, []);
  const handleReset = useCallback(() => {
    dispatch(reset());
    navigation.navigate("Splash");
  }, []);

  return (
    <View style={{ position: "absolute", zIndex: 1 }}>
      <Ionicons
        name="settings"
        size={32}
        color="black"
        onPress={handleOpenMenu}
      />
      <Modal animationType="slide" transparent visible={showMenu}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <MenuButton label="Reset" onPress={handleReset} />
        </View>
      </Modal>
    </View>
  );
};
