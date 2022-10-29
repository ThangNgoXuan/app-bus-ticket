import axios from "axios";
import { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import newsApi from "../api/newsApi";
import useValues from "../hooks/useValues";

export default function HomeScreen({ navigation }) {
  const [values, setValues] = useValues({
    listNew: [],
  });
  useEffect(() => {
    newsApi
      .getAllNews()
      .then((res) => setValues({ listNew: res.data }))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.headerContainet}>
          <TouchableOpacity
            onPressIn={() =>
              navigation.navigate("ACCOUNT")
            }
          >
            <Image
              style={styles.headerContainetIcon}
              source={{ uri: "https://picsum.photos/40/40" }}
            />
          </TouchableOpacity>
          <Text style={styles.headerContainetText}>Ngô Xuân Thắng</Text>
        </View>

        {/* <View style={styles.carousel}></View> */}
        <Image
          source={{
            uri: "https://picsum.photos/200/200",
          }}
          style={styles.imageBanner}
        />
        <View style={styles.listNew}>
          <Text style={styles.title}>Tin tức</Text>
          {values.listNew &&
            values.listNew.map((item, index) => (
              <TouchableOpacity
                delayPressIn={500}
                onPressIn={() =>
                  navigation.navigate("NEW_DETAIL", { slug: item?.slug })
                }
                style={styles.newItem}
                key={`newItem-${index.toString()}`}
              >
                {console.log("slug", item.slug)}
                <Image
                  style={styles.newImage}
                  source={{ uri: item.thumbnail }}
                />
                <View style={styles.content}>
                  <Text style={styles.contentTitle} numberOfLines={1}>
                    {item?.title}
                  </Text>
                  <Text style={styles.contentSubTitle} numberOfLines={3}>
                    {item?.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
        <Image
          source={{
            uri: "https://picsum.photos/200/300",
          }}
          style={styles.imageBanner}
        />
        <View style={styles.listNew}>
          <Text style={styles.title}>Tin tức</Text>
          {values.listNew &&
            values.listNew.map((item, index) => (
              <TouchableOpacity
                delayPressIn={500}
                onPressIn={() =>
                  navigation.navigate("NEW_DETAIL", { slug: item?.slug })
                }
                style={styles.newItem}
                key={`newItem-${index.toString()}`}
              >
                <Image
                  style={styles.newImage}
                  source={{ uri: item.thumbnail }}
                />
                <View style={styles.content}>
                  <Text style={styles.contentTitle} numberOfLines={1}>
                    {item?.title}
                  </Text>
                  <Text style={styles.contentSubTitle} numberOfLines={3}>
                    {item?.subtitle}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    paddingBottom: 140,
    backgroundColor: "#fff",
  },

  headerContainet: {
    width: "100%",
    backgroundColor: "#fff",
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    padding: 8,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },

  headerContainetIcon: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginRight: 8,
  },

  headerContainetText: {
    fontWeight: "600",
    color: "#001c6b",
  },

  imageBanner: {
    width: "90%",
    height: 200,
    borderRadius: 8,
    marginTop: 8,
  },

  title: {
    fontWeight: "800",
    color: "#001c6b",
    fontSize: 20,
    marginBottom: 8,
  },

  carousel: {},

  listNew: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 16,
  },

  newItem: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 4,
  },

  newImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },

  content: {
    paddingHorizontal: 8,
  },

  contentTitle: {
    fontSize: 18,
    fontWeight: "600",
    maxWidth: "87%",
  },

  contentSubTitle: {
    color: "gray",
    maxWidth: "87%",
  },
});
