import { Formik } from "formik";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { bookingInfoValidationSchema } from "../Utils/Validaion";

export default function BookingInfoScreen({ navigation }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPressIn={() => navigation.navigate("NAVIGATION")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Thông tin khách hàng</Text>
      </View>
    <View style={styles.container}>
      <Formik
        validationSchema={bookingInfoValidationSchema}
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate("CHOOSE_SEET");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder={placehoder.name}
                style={styles.formInput}
              />
              {errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}
            </View>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder={placehoder.phone}
                style={styles.formInput}
              />
              {errors.phone && (
                <Text style={styles.errorText}>{errors.phone}</Text>
              )}
            </View>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder={placehoder.email}
                style={styles.formInput}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox checked={true} />
              <Text style={styles.label}>
                Chấp nhận điều khoản của Bus Ticket?
              </Text>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPressIn={handleSubmit}>
              <Text style={styles.textBtnSubmit}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  iconTitle: {
    width: 20,
    height: 20,
  },

  titleScreen: {
    fontWeight: "800",
    fontSize: 20,
    marginLeft: 8,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 0.5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    width: "100%",
  },

  form: {
    marginTop: 50,
    alignItems: "center",
  },

  formField: {
    marginTop: 8,
    width: "100%",
  },

  formInput: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    paddingVertical: 8,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },

  label: {},

  btnSubmit: {
    backgroundColor: "#001c6b",
    height: 50,
    borderRadius: 15,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  textBtnSubmit: {
    color: "#fff",
  },

  errorText: {
    fontSize: 10,
    color: "red",
  },
});

const placehoder = {
  name: "Họ và tên (*)",
  phone: "Số điện thoại (*)",
  email: "Email (*)",
};
