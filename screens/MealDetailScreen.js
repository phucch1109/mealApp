import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import ListItem from "../components/ListItem";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((x) => (x.id = mealId));

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails
          duration={selectedMeal.duration}
          complexity={selectedMeal.complexity}
          affordability={selectedMeal.affordability}
          textStyle={{ color: "white" }}
        />
        <View style={styles.listContainer}>
        <Subtitle>Ingredients</Subtitle>
        <ListItem data={selectedMeal.ingredients} />
        <Subtitle>Step</Subtitle>
        <ListItem data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  listContainer: {
    alignSelf:'center',
    width: '80%'
  }
});
