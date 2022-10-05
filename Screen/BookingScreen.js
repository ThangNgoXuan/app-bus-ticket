import React, { useState } from "react";
import { Formik } from "formik";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function BookingScreen({ navigation }) {
  const [datePicker, setDatePicker] = useState(false);

  const [date, setDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePicker(true);
  };

  const onDateSelected = (even, value) => {
    setDate(value);
    setDatePicker(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titleScreen}>Đặt vé</Text>
      <Formik
        initialValues={{
          start: "",
          end: "",
          date: date,
          sheetTotal: 0,
        }}
        onSubmit={(values) => {
          console.log(values), navigation.navigate("BOOKING_INFO");
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <View style={styles.form}>
              <View style={styles.formField}>
                <Text>Chọn điểm đi</Text>
                <View style={styles.inputWrapp}>
                  <Image
                    style={styles.inputIcon}
                    source={require("../assets/Icons/place.png")}
                  />

                  <TextInput
                    onChangeText={handleChange("start")}
                    onBlur={handleBlur("start")}
                    value={values.email}
                    style={styles.input}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text>Chọn điểm đến</Text>
                <View style={styles.inputWrapp}>
                  <Image
                    style={styles.inputIcon}
                    source={require("../assets/Icons/place.png")}
                  />

                  <TextInput
                    onChangeText={handleChange("end")}
                    onBlur={handleBlur("end")}
                    value={values.email}
                    style={styles.input}
                  />
                </View>
              </View>
              <View style={styles.formField}>
                <Text>Chọn ngày đi</Text>
                <View style={styles.inputWrapp}>
                  <Image
                    style={styles.inputIcon}
                    source={require("../assets/Icons/calendar.png")}
                  />
                  <TextInput
                    onChangeText={handleChange("end")}
                    onBlur={handleBlur("end")}
                    value={`${date.getDate().toString()}/${date.getMonth().toString()}/${date.getFullYear().toString()}`}
                    style={styles.input}
                    onPressIn={showDatePicker}
                  />
                </View>
                {datePicker && (
                  <DateTimePicker
                    value={date}
                    mode={"date"}
                    onChange={onDateSelected}
                    dateFormat="DD-MM-YYYY"
                  />
                )}
              </View>
              <View style={styles.formField}>
                <Text>Số ghế</Text>
                <View style={styles.inputWrapp}>
                  <Image
                    style={styles.inputIcon}
                    source={require("../assets/Icons/person.png")}
                  />

                  <TextInput
                    onChangeText={handleChange("start")}
                    onBlur={handleBlur("start")}
                    value={values.email}
                    style={styles.input}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPressIn={handleSubmit}
                style={styles.btnSubmit}
              >
                <Text style={styles.textBtnSubmit}>Tiếp tục</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  titleScreen: {
    fontWeight: "800",
    fontSize: 20,
  },

  datePickerStyle: {
    width: 230,
  },

  inputWrapp: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#000",
    marginTop: 8,
    alignItems: "center",
  },

  input: {
    flex: 1,
    marginLeft: 8,
  },

  inputIcon: {
    width: 14,
    height: 14,
  },

  form: {
    alignItems: "center",
    marginTop: 20,
  },

  formField: {
    width: "100%",
    marginTop: 12,
  },

  btnSubmit: {
    height: 50,
    borderRadius: 15,
    width: "50%",
    backgroundColor: "#001c6b",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },

  textBtnSubmit: {
    color: "#fff",
    fontSize: 16,
  },
});
