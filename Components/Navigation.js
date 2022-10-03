import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, View } from "react-native";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AccountScreen from "../Screen/AccountScreen";
import BookingScreen from "../Screen/BookingScreen";
import HomeScreen from "../Screen/HomeScreen";
import MapScreen from "../Screen/MapScreen";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.navigationContainer,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.itemContainer}>
              <Image
                source={require("../assets/Icons/home.png")}
                style={{
                  tintColor: focused ? "#e32f45" : "#748c94",
                  ...styles.icon,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MAP"
        component={MapScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.itemContainer}>
              <Image
                source={require("../assets/Icons/map.png")}
                style={{
                  tintColor: focused ? "#e32f45" : "#748c94",
                  ...styles.icon,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                }}
              >
                Map
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="BOOKING"
        component={BookingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.itemContainer}>
              <Image
                source={require("../assets/Icons/tickets.png")}
                style={{
                  tintColor: focused ? "#e32f45" : "#748c94",
                  ...styles.icon,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                }}
              >
                Đặt vé
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ACCOUNT"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.itemContainer}>
              <Image
                source={require("../assets/Icons/account.png")}
                style={{
                  tintColor: focused ? "#e32f45" : "#748c94",
                  ...styles.icon,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: focused ? "#e32f45" : "#748c94",
                }}
              >
                Tài khoản
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    height: 90,
    position: "absolute",
    bottom: 25,
    right: 20,
    left: 20,
    elevation: 0,
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowColor: "#7f5df0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  itemContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 25,
  },
});
