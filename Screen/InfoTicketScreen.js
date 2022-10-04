import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function InfoTicketScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPressIn={() => navigation.navigate("PAYMENT")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Thông tin vé</Text>
      </View>
      <View style={styles.infoUser}>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Số điện thoại</Text>
          <Text style={styles.infoUserValue}>Ngô Xuân Thắng</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Họ tên</Text>
          <Text style={styles.infoUserValue}>0337930954</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Email</Text>
          <Text style={styles.infoUserValue}>thangnx.it@gmail.com</Text>
        </View>
      </View>
      <View style={styles.infoTicket}>
        <Text style={styles.infoTicketTitle}>Thông tin vé</Text>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Chuyến</Text>
          <Text style={styles.infoUserValue}>Bình Định &gt; Bình Dương</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Điểm đón</Text>
          <Text style={styles.infoUserValue}>Biến xe</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Thời gian</Text>
          <Text style={styles.infoUserValue}>7:00 ngày 02/10/2022</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Sô ghế</Text>
          <Text style={styles.infoUserValue}>A32</Text>
        </View>
        <View style={styles.infoUserItem}>
          <Text style={styles.infoUserKey}>Chi phí</Text>
          <Text style={styles.infoUserValue}>800,000 VNĐ</Text>
        </View>
      </View>
      <TouchableOpacity
        onPressIn={() => navigation.navigate("NAVIGATION")}
        style={styles.btnSubmit}
      >
        <Text style={styles.textBtnSubmit}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
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

  btnSubmit: {
    height: 50,
    borderRadius: 15,
    width: "50%",
    backgroundColor: "#001c6b",
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },

  textBtnSubmit: {
    color: "#fff",
    fontSize: 16,
  },

  infoUser: {
    width: "100%",
    paddingHorizontal: 24,
    marginTop: 20,
  },

  infoUserItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },

  infoUserKey: {},

  infoUserValue: {
    color: "#001c6b",
    fontWeight: "700",
  },

  infoTicket: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    padding: 16,
    marginTop: 40,
    width: "90%",
  },

  infoTicketTitle: {
    position: "absolute",
    top: 0,
    left: 20,
    backgroundColor: "#fff",
    transform: [{ translateY: -10 }],
    paddingHorizontal: 6,
  },
});
