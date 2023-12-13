import { View } from "react-native";
import { CustomText, MenuButton } from "../../components";
import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../../../App";

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
      <CustomText style={{ fontSize: 24 }}>PLEEPER'S COUNTER</CustomText>
      <MenuButton label="START GAME" onPress={handleStart} />
    </View>
  );
};
