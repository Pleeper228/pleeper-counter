import { Text, TextProps } from "react-native";

export const CustomText = ({ children, style, ...rest }: TextProps) => (
  <Text {...rest} style={[style, { fontFamily: "Futura" }]}>
    {children}
  </Text>
);
