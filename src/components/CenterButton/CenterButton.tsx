import React, { useCallback, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Modal, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { useDispatch } from "react-redux";
import { reset } from "../../reducers";
import { colors } from "../../../colors";
import { CustomText } from "../CustomText";
import { CustomPressable } from "../CustomPressable";

export const CenterButton = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setShowMenu(true);
  }, []);
  const handleCloseMenu = useCallback(() => {
    setShowMenu(false);
  }, []);
  const handleExit = useCallback(() => {
    dispatch(reset());
    navigation.navigate("Splash");
  }, [dispatch, navigation]);

  return (
    <View style={{ position: "absolute", zIndex: 1 }}>
      <Ionicons
        name="flower-sharp"
        size={32}
        color={colors.primary}
        onPress={handleOpenMenu}
        suppressHighlighting
        style={{
          borderRadius: 24,
          padding: 8,
          backgroundColor: colors.secondary,
          overflow: "hidden",
        }}
      />
      <Modal animationType="slide" transparent visible={showMenu}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              padding: 40,
              backgroundColor: colors.secondary,
              borderRadius: 16,
              shadowColor: colors.primary,
              shadowOffset: { width: 4, height: 4 },
              shadowOpacity: 0.6,
              shadowRadius: 2,
              elevation: 5,
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="close"
              size={32}
              color={colors.primary}
              style={{ position: "absolute", zIndex: 1, right: 16, top: 16 }}
              suppressHighlighting
              onPress={handleCloseMenu}
            />
            <CustomText
              style={{ marginTop: 16, fontWeight: "bold", fontSize: 16 }}
            >
              MAIN MENU
            </CustomText>
            <CustomPressable
              onPress={handleExit}
              style={{ borderRadius: 8, width: 200 }}
            >
              <CustomText
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: colors.secondary,
                }}
              >
                RESET COUNTERS
              </CustomText>
            </CustomPressable>
            <CustomPressable
              onPress={handleExit}
              style={{ borderRadius: 8, width: 200 }}
            >
              <CustomText
                style={{
                  fontWeight: "bold",
                  fontSize: 16,
                  color: colors.secondary,
                }}
              >
                EXIT
              </CustomText>
            </CustomPressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
