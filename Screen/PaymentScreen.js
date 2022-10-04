import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PaymentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPressIn={() => navigation.navigate("CHOOSE_SEET")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Thanh toán</Text>
      </View>
      <View style={styles.method}>
        <TouchableOpacity style={styles.methodItem}>
          <Image
            style={styles.methodImg}
            source={require("../assets/Icons/momo.png")}
          />
          <Text style={styles.titleMomo}>MoMo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.methodItem}>
          <Image
            style={styles.methodImg}
            source={require("../assets/Icons/vnpay.png")}
          />
          <Text style={styles.titleVNPay}>VN Pay</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPressIn={() => navigation.navigate("INFOR_TICKET")}
        style={styles.btnSubmit}
      >
        <Text style={styles.textBtnSubmit}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
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

  method: {
    flexDirection: "row",
    width: "50%",
    marginTop: 150,
    justifyContent: "space-between",
  },

  methodImg: {
    width: 80,
    height: 80,
  },

  methodItem: {
    justifyContent: "center",
    alignItems: "center",
  },

  titleMomo: {
    color: "#aa1f6c",
    fontWeight: "700",
    marginTop: 8,
  },

  titleVNPay: {
    color: "#0058a5",
    fontWeight: "700",
    marginTop: 8,
  },
});
