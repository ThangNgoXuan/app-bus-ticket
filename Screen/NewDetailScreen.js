import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function NewDetailScreen({ navigation }) {
  return (
    <View style={styles.screen}>
        <TouchableOpacity onPressIn={() => navigation.navigate("HOME")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
      <Image
        source={{
          uri: "https://picsum.photos/200/200",
        }}
        style={styles.image}
      />
      <Text style={styles.title}>NewDetailScreen</Text>
      <Text style={styles.subTitle}>07:00 20/10/2022</Text>
      <Text style={styles.content}>
        Lorem Ipsum chỉ đơn giản là một đoạn văn bản giả, được dùng vào việc
        trình bày và dàn trang phục vụ cho in ấn. Lorem Ipsum đã được sử dụng
        như một văn bản chuẩn cho ngành công nghiệp in ấn từ những năm 1500, khi
        một họa sĩ vô danh ghép nhiều đoạn văn bản với nhau để tạo thành một bản
        mẫu văn bản. Đoạn văn bản này không những đã tồn tại năm thế kỉ, mà khi
        được áp dụng vào tin học văn phòng, nội dung của nó vẫn không hề bị thay
        đổi. Nó đã được phổ biến trong những năm 1960 nhờ việc bán những bản
        giấy Letraset in những đoạn Lorem Ipsum, và gần đây hơn, được sử dụng
        trong các ứng dụng dàn trang, như Aldus PageMaker.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },

  iconTitle: {
    width: 20,
    height: 20,
    marginBottom: 12,
  },

  title: {
    fontWeight: "700",
    fontSize: 20,
    marginVertical: 12,
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },

  subTitle: {
    color: "gray",
    fontStyle: "italic",
    fontWeight: "600",
  },

  content: {
    color: "gray",
    marginTop: 12,
  },
});
