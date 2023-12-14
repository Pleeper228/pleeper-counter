import { ViewProps } from "react-native";
import Animated, { AnimateProps } from "react-native-reanimated";

export const CustomView = ({ children, ...rest }: AnimateProps<ViewProps>) => (
  <Animated.View {...rest}>{children}</Animated.View>
);
