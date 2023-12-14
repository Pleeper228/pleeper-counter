import { View } from "react-native";
import { CustomPressable, CustomText } from "../../components";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";
import { colors } from "../../../colors";

export const Splash = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleStart = useCallback(() => {
    navigation.navigate("SetupMenu");
  }, [navigation]);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
      }}
    >
      <CustomText style={{ fontSize: 24, marginBottom: 16 }}>
        PLEEPER'S COUNTER
      </CustomText>
      <CustomPressable
        onPress={handleStart}
        style={{ borderRadius: 8, width: 240 }}
      >
        <CustomText
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: colors.secondary,
          }}
        >
          START GAME
        </CustomText>
      </CustomPressable>
      <CustomPressable
        onPress={handleStart}
        style={{ borderRadius: 8, width: 240 }}
      >
        <CustomText
          style={{
            fontWeight: "bold",
            fontSize: 24,
            color: colors.secondary,
          }}
        >
          OPTIONS
        </CustomText>
      </CustomPressable>
    </View>
  );
};
