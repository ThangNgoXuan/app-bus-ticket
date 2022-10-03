import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Header, ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Components/Navigation";

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
          <StatusBar style='light' />
          <Navigation />
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
