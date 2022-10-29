import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HistoryOrderScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPressIn={() => navigation.navigate("NAVIGATION")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Lịch sử đặt vé</Text>
      </View>
      <View style={styles.containerList}>
        <TouchableOpacity
          style={styles.listItem_lastchild}
          onPressIn={() => navigation.navigate("INFOR_TICKET")}
        >
          <View style={styles.itemTitle}>
            <Image
              style={styles.icon}
              source={require("../assets/Icons/ticket.png")}
            />
            <Text style={styles.textItem}>Bình Đình &gt; Bình Dương</Text>
          </View>
          <Text style={styles.textItemTime}>
            Thời gian đi: 07:00 02/10/2022
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listItem_lastchild}
          onPressIn={() => navigation.navigate("INFOR_TICKET")}
        >
          <View style={styles.itemTitle}>
            <Image
              style={styles.icon}
              source={require("../assets/Icons/ticket.png")}
            />
            <Text style={styles.textItem}>Bình Đình &gt; Bình Dương</Text>
          </View>
          <Text style={styles.textItemTime}>
            Thời gian đi: 07:00 02/10/2022
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff"
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
  },

  iconTitle: {
    width: 20,
    height: 20,
  },

  titleScreen: {
    fontWeight: "800",
    fontSize: 20,
    marginLeft: 20,
  },
  containerList: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 20,
  },

  listItem: {
    padding: 15,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  listItem_lastchild: {
    padding: 15,
  },

  'listItem_lastchild:first-child': {
    backgroundColor: 'red',
  },

  textItem: {
    marginLeft: 15,
  },

  itemTitle: {
    flexDirection: "row",
    alignItems: "center",
  },

  textItemTime: {
    color: "#001c6b",
    fontWeight: "700",
  },

  icon: {
    width: 30,
    height: 30,
  },
});
