import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Text, View } from "react-native";

export default function SignUpScreen({ navigation }) {
  return (
    <View style={styles.signInContainer}>
      <Image
        source={{
          uri: "https://picsum.photos/200/200",
        }}
        style={styles.logo}
      />
      <Text style={styles.textSignIn}>Đăng kí</Text>
      <Formik
        initialValues={{
          name: '',
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("NAVIGATION");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.formField}>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/account.png")}
                />
                <TextInput
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                  style={styles.input}
                  placeholder="Họ tên (*)"
                />
              </View>
            </View>
            <View style={styles.formField}>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/phone.png")}
                />
                <TextInput
                  onChangeText={handleChange("phone")}
                  onBlur={handleBlur("phone")}
                  value={values.phone}
                  style={styles.input}
                  placeholder="Số điện thoại (*)"
                />
              </View>
            </View>
            <View style={styles.formField}>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/password.png")}
                />

                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  style={styles.input}
                  placeholder="Mật khẩu (*)"
                />
              </View>
            </View>
            <View style={styles.formField}>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/password.png")}
                />

                <TextInput
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  value={values.confirmPassword}
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu (*)"
                />
              </View>
            </View>
            <View style={styles.other}>
              <TouchableOpacity onPressIn={() => navigation.navigate("SIGNIN")}>
                <Text style={styles.textSignUp}>Quay lại đăng nhập !</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPressIn={handleSubmit} style={styles.btnSubmit}>
              <Text style={styles.textBtnSubmit}>Đăng Kí</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    marginTop: 40,
  },

  textSignIn: {
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  inputIcon: {
    width: 20,
    height: 20,
  },

  inputWrapp: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginTop: 8,
    alignItems: "center",
  },

  form: {
    alignItems: "center",
    marginTop: 20,
    width: "100%",
  },

  formField: {
    width: "100%",
    marginTop: 12,
  },

  btnSubmit: {
    height: 50,
    borderRadius: 50,
    width: 200,
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

  other: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 12,
  },

  textSignUp: {
    fontWeight: "800",
    color: "#001c6b",
    fontSize: 16,
  },

  textFoward: {
    fontSize: 16,
  },
});
