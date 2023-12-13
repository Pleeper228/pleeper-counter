import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";
import { Main, SetupMenu, Splash } from "./src/screens";

export type RootStackParams = {
  Splash: undefined;
  SetupMenu: undefined;
  Main: undefined;
};
const Stack = createNativeStackNavigator<RootStackParams>();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="SetupMenu" component={SetupMenu} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
