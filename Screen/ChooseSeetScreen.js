import { Formik } from "formik";
import { useState } from "react";
import { TextInput } from "react-native";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";
import { chooseSeetValidationSchema } from "../Utils/Validaion";

const lisPlace = [
  {
    id: "1",
    value: "congvien",
    label: "Công viên Nhơn Hạnh",
  },
  {
    id: "2",
    value: "benxe",
    label: "Bến xe Qui Nhơn",
  },
  {
    id: "3",
    value: "nhonhanh",
    label: "Nhơn Phong",
  },
];

export default function ChooseSeetScreen({ navigation }) {
  const [checked, setChecked] = useState(lisPlace[0].value);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPressIn={() => navigation.navigate("BOOKING_INFO")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Text style={styles.titleScreen}>Chọn ghế đi</Text>
      </View>
      <View style={styles.infoWrap}>
        <Text style={styles.info}>Bình định &gt; Bình Dương (800.000 VNĐ)</Text>
        <Text style={styles.info}>Ngày đi: 02/10/2022</Text>
      </View>
      <Formik
        initialValues={{
          timeStart: "",
          seetNumber: "",
          pointStart: checked,
        }}
        onSubmit={(values) => {
          console.log(values), navigation.navigate("PAYMENT");
        }}
        validationSchema={chooseSeetValidationSchema}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.form}>
            <View style={styles.formField}>
              <Text>Chọn giờ đi</Text>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/clock.png")}
                />

                <TextInput
                  onChangeText={handleChange("timeStart")}
                  onBlur={handleBlur("timeStart")}
                  value={values.timeStart}
                  style={styles.input}
                />
              </View>
              {errors.timeStart && (
                <Text style={styles.errorText}>{errors.timeStart}</Text>
              )}
            </View>

            <View style={styles.formField}>
              <Text>Chọn ghế</Text>
              <View style={styles.inputWrapp}>
                <Image
                  style={styles.inputIcon}
                  source={require("../assets/Icons/chair.png")}
                />

                <TextInput
                  onChangeText={handleChange("seetNumber")}
                  onBlur={handleBlur("seetNumber")}
                  value={values.seetNumber}
                  style={styles.input}
                />
              </View>
              {errors.seetNumber && (
                <Text style={styles.errorText}>{errors.seetNumber}</Text>
              )}
            </View>

            <View style={styles.formField}>
              <Text>Chọn điểm đón</Text>
              <View style={styles.radioContainer}>
                <RadioButton.Group
                  onValueChange={handleChange("pointStart")}
                  value={values.pointStart}
                >
                {lisPlace.map((item, index) => (
                  <View
                  style={styles.radioWrap}
                  >
                    <RadioButton
                    key={`radio-button-${index.toString()}`}
                      value={item.value}
                      status={checked === item.value ? "checked" : "unchecked"}
                      onPressIn={() => setChecked(item.value)}
                      color="#001c6b"
                    />
                    <Text
                      style={
                        checked == item.value && {
                          color: "#001c6b",
                          fontWeight: "700",
                        }
                      }
                    >
                      {item.label}
                    </Text>
                  </View>
                ))}
                </RadioButton.Group>
              </View>
            </View>
            <TouchableOpacity onPressIn={handleSubmit} style={styles.btnSubmit}>
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

  input: {
    flex: 1,
    marginLeft: 8,
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

  infoWrap: {
    borderBottomColor: "rgba(0,0,0,0.5)",
    borderBottomWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },

  info: {
    color: "#001c6b",
    fontWeight: "600",
    marginVertical: 4,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },

  inputIcon: {
    width: 14,
    height: 14,
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
    paddingHorizontal: 16,
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
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "auto",
  },

  textBtnSubmit: {
    color: "#fff",
    fontSize: 16,
  },

  radioContainer: {
    marginTop: 8,
  },

  radioWrap: {
    flexDirection: "row",
    alignItems: "center",
  },

  errorText: {
    fontSize: 10,
    color: "red",
  },
});
