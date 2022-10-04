import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Header, ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavigationScreen from "./Screen/NavigationScreen";
import { createStackNavigator } from "@react-navigation/stack";
import InformationScreen from "./Screen/InformationScreen";
import SignInScreen from "./Screen/SignInScreen";
import SignUpScreen from "./Screen/SignUpScreen";
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Header
            backgroundColor="#001c6b"
            centerComponent={{
              text: "BUS TICKET",
              style: styles.textHeader,
            }}
          />
          <StatusBar style="light" />
          <Stack.Navigator
            initialRouteName="SIGNIN"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="NAVIGATION" component={NavigationScreen} />
            <Stack.Screen name="INFORMATION" component={InformationScreen} />
            <Stack.Screen name="SIGNIN" component={SignInScreen} />
            <Stack.Screen name="SIGNUP" component={SignUpScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 20,
    fontWeight: "900",
    color: "#fff",
  },
});
