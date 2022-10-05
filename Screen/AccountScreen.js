import { TouchableOpacity } from "react-native";
import { View, Text, Image, StyleSheet } from "react-native";

export default function AccountScreen({navigation}) {
  return (
    <View style={styles.accountContainer}>
      <Text style={styles.title}>Tài khoản</Text>
      <TouchableOpacity style={styles.infoAccount} onPressIn={() => navigation.navigate('INFORMATION')}>
        <Image
          style={styles.imageAccount}
          source={require("../assets/Icons/account.png")}
          resizeMode="contain"
        />
        <Text style={styles.name}>Thang Ngo</Text>
      </TouchableOpacity>
      <View style={styles.containerList}>
        <View style={styles.listItem}>
          <Image
            source={require("../assets/Icons/score.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.textItem}>Điểm thưởng</Text>
        </View>
        <TouchableOpacity style={styles.listItem_lastchild}
          onPressIn={() => navigation.navigate("HISTORY_ORDER")}
        >
          <Image style={styles.icon} source={require("../assets/Icons/history.png")} />
          <Text style={styles.textItem}>Lịch sử đặt vé</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <TouchableOpacity style={styles.listItem_lastchild} onPressIn={() => navigation.navigate("SIGNIN")}>
          <Image
            source={require("../assets/Icons/logout.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text style={styles.textItem}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  accountContainer: {
    backgroundColor: "rgba(0, 28, 107, 0.05)",
    flex: 1,
    padding: 15,
  },

  infoAccount: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
  },

  title: {
    fontSize: 16,
    fontWeight: "800",
    marginBottom: 20,
  },

  imageAccount: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  name: {
    fontWeight: "700",
    fontSize: 18,
    color: "#001c6b",
  },

  containerList: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    marginTop: 12,
  },

  listItem: {
    padding: 15,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },

  listItem_lastchild: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },

  textItem: {
    marginLeft: 15,
  },

  icon: {
    width: 30,
    height: 30,
  }
});
