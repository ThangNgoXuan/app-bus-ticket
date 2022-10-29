import { Formik } from "formik";
import React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { loginValidationSchema } from "../Utils/Validation";

export default function SignInScreen({ navigation }) {

  return (
    <View style={styles.signInContainer}>
      <Image
        source={{
          uri: "https://picsum.photos/200/200",
        }}
        style={styles.logo}
      />
      <Text style={styles.textSignIn}>Chào mừng bạn đến với Bus Ticket.</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{
          phone: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("NAVIGATION");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
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
                  keyboardType='numeric'
                />
              </View>
                {errors.phone && (
                  <Text style={styles.errorText}>
                    {errors.phone}
                  </Text>
                )}
            </View>
            <View style={styles.formField}>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/password.png")}
                />

                <TextInput
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("end")}
                  value={values.password}
                  style={styles.input}
                  secureTextEntry={true}
                />
              </View>
              {errors.password && (
                <Text style={styles.errorText}>
                  {errors.password}
                </Text>
              )}
            </View>
            <View style={styles.other}>
              <Text style={styles.textFoward}>Quên mật khẩu ?</Text>
              <TouchableOpacity onPressIn={() => navigation.navigate("SIGNUP")}>
                <Text style={styles.textSignUp}>Đăng kí !</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPressIn={handleSubmit} style={styles.btnSubmit}>
              <Text style={styles.textBtnSubmit}>Đăng nhập</Text>
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
    marginTop: 80,
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

  errorText: { fontSize: 10, color: "red" },
});
