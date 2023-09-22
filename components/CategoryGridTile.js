import { Pressable, Text, View, StyleSheet, Platform } from "react-native";
// import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color,onPress }) {
// const navigation = useNavigation();
  return (
    <View style={[styles.gridItem]}>
      <Pressable
        style={({ pressed }) => [
          { flex: 1 },
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer,{backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: "white",
    shadowRadius: 8,
    overflow: Platform.OS != "ios" ? "hidden" : "visible",
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius:8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default CategoryGridTile;
