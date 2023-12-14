import { TextProps } from "react-native";
import { colors } from "../../../colors";
import Animated, { AnimateProps } from "react-native-reanimated";

export const CustomText = ({
  children,
  style,
  ...rest
}: AnimateProps<TextProps>) => (
  <Animated.Text
    {...rest}
    style={[{ fontFamily: "Futura", color: colors.primary }, style]}
  >
    {children}
  </Animated.Text>
);
