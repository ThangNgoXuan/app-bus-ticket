import { Formik } from "formik";
import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { CheckBox } from "react-native-elements";

export default function BookingInfoScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.titleScreen}>Thông tin khách hàng</Text>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        onSubmit={(values) => {
          console.log(values)
          navigation.navigate('CHOOSE_SEET')
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.form}>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
                placeholder={placehoder.name}
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                value={values.phone}
                placeholder={placehoder.phone}
                style={styles.formInput}
              />
            </View>
            <View style={styles.formField}>
              <TextInput
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                placeholder={placehoder.email}
                style={styles.formInput}
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={true}
              />
              <Text style={styles.label}>Chấp nhận điều khoản của Bus Ticket?</Text>
            </View>
            <TouchableOpacity style={styles.btnSubmit} onPressIn={handleSubmit}>
              <Text style={styles.textBtnSubmit}>Tiếp tục</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  titleScreen: {
    fontWeight: "800",
    fontSize: 20,
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
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },

  label: {

  },

  btnSubmit: {
    backgroundColor: "#001c6b",
    height: 50,
    borderRadius: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  textBtnSubmit: {
    color: "#fff",
  },
});

const placehoder = {
  name: "Họ và tên (*)",
  phone: "Số điện thoại (*)",
  email: "Email (*)",
};
