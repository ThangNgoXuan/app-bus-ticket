import { View, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MapView from "react-native-maps";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.inputSearch}>
        <TextInput placeholder="Tìm kiếm" style={styles.input} />
        <TouchableOpacity style={styles.wrapIcon}>
          <Image
            style={styles.iconSearch}
            source={require("../assets/Icons/search.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 	10.850720,
          longitude: 	106.771729,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsCompass={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputSearch: {
    backgroundColor: "#fff",
    position: "absolute",
    top: 0,
    left: 20,
    right: 20,
    zIndex: 2,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#001c6b",
    borderTopWidth: 0,
  },

  input: {
    width: "80%",
    paddingLeft: 8,
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },

  wrapIcon: {
    backgroundColor: "rgba(0,0,0,0.1)",
    height: "100%",
    padding: 8,
    borderBottomRightRadius: 8,
  },

  iconSearch: {
    width: 20,
    height: 20,
  },
});
