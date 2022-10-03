import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Header, ThemeProvider } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./Components/Navigation";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <Header
            leftComponent={{ icon: "menu", color: "#fff" }}
            centerComponent={{ text: "BUS TICKET", style: { color: "#fff" } }}
            rightComponent={{ icon: "home", color: "#fff" }}
          />
          <StatusBar style="auto" />
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
