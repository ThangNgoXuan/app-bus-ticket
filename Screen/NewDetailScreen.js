import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Image } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import RenderHTML from "react-native-render-html";
import newsApi from "../api/newsApi";

export default function NewDetailScreen({ navigation, route }) {
  const [data, setData] = useState();
  const { width } = useWindowDimensions();
  useEffect(() => {
    const { slug } = route.params;
    newsApi
      .findBySlug(slug)
      .then((res) => setData(res.data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <TouchableOpacity onPressIn={() => navigation.navigate("HOME")}>
          <Image
            style={styles.iconTitle}
            source={require("../assets/Icons/arrow.png")}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: data?.thumbnail,
          }}
          style={styles.image}
        />
        <Text style={styles.title}>{data?.title}</Text>
        <Text style={styles.subTitle}>
          {moment(data?.createdAt).format("DD/MM/YYYY")}
        </Text>
        <Text style={styles.title}>{data?.subtitle}</Text>
        <RenderHTML
          contentWidth={width - 40}
          source={{ html: `${data?.content}` }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
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
