import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { store } from "./store";
import { Main, SetupMenu, Splash } from "./src/screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParams = {
  Splash: undefined;
  SetupMenu: undefined;
  Main: undefined;
};
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            unmountOnBlur: true,
          }}
          tabBar={() => null}
        >
          <Tab.Screen name="Splash" component={Splash} />
          <Tab.Screen name="SetupMenu" component={SetupMenu} />
          <Tab.Screen name="Main" component={Main} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
