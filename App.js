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
import BookingInfoScreen from "./Screen/BookingInfoScreen";
import ChooseSeetScreen from "./Screen/ChooseSeetScreen";
import PaymentScreen from "./Screen/PaymentScreen";
import InfoTicketScreen from "./Screen/InfoTicketScreen";
import HistoryOrderScreen from "./Screen/HistoryOrderScreen";
import NewDetailScreen from "./Screen/NewDetailScreen";
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
            initialRouteName="NAVIGATION"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="NAVIGATION" component={NavigationScreen} />
            <Stack.Screen name="INFORMATION" component={InformationScreen} />
            <Stack.Screen name="SIGNIN" component={SignInScreen} />
            <Stack.Screen name="SIGNUP" component={SignUpScreen} />
            <Stack.Screen name="BOOKING_INFO" component={BookingInfoScreen} />
            <Stack.Screen name="CHOOSE_SEET" component={ChooseSeetScreen} />
            <Stack.Screen name="PAYMENT" component={PaymentScreen} />
            <Stack.Screen name="INFOR_TICKET" component={InfoTicketScreen} />
            <Stack.Screen name="HISTORY_ORDER" component={HistoryOrderScreen} />
            <Stack.Screen name="NEW_DETAIL" component={NewDetailScreen} />
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
