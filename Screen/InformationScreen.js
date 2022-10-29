import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";

export default function InformationScreen({ navigation }) {
  return (
    <View style={styles.infoScreen}>
      <View style={styles.infoView}>
        <Image
          style={styles.infoImage}
          source={require("../assets/Icons/account.png")}
        />
        <View style={styles.infoItem}>
          <Text style={styles.textItemStyle}>Họ & Tên</Text>
          <Text style={styles.textItemContentStyle}>Ngô Xuân Thắng</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.textItemStyle}>Email</Text>
          <Text style={styles.textItemContentStyle}>
            ngoxuanthangnyc@gmail.com
          </Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.textItemStyle}>Số điện thoại</Text>
          <Text style={styles.textItemContentStyle}>0337930954</Text>
        </View>
      </View>
      <View style={styles.infoButton}>
        <TouchableOpacity
          style={styles.btnUpdate}
          onPressIn={() => navigation.navigate("HOME")}
        >
          <Text style={styles.textBtnUpdate}>Cập nhật thông tin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnLogOut}
          onPressIn={() => navigation.navigate("SIGNIN")}
        >
          <Text style={styles.textBtnLogOut}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoScreen: {
    flex: 1,
    padding: 16,
    paddingTop: 24,
    backgroundColor: "#fff",
  },

  infoImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },

  infoView: {
    flex: 1,
    alignItems: "center",
  },

  infoButton: {},

  infoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },

  textItemStyle: {
    fontSize: 14,
    color: "gray",
  },

  textItemContentStyle: {
    fontSize: 14,
    color: "black",
  },

  btnUpdate: {
    backgroundColor: "#001c6b",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  btnLogOut: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  textBtnUpdate: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 16,
  },

  textBtnLogOut: {
    color: "#001c6b",
    fontWeight: "500",
    fontSize: 16,
  },
});
