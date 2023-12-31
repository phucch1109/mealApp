import {
  Image,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/Subtitle";
import ListItem from "../components/ListItem";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
  const favoriteMealsContext = useContext(FavoritesContext);
  const mealId = route.params.mealId;
  const mealIsFavorite = favoriteMealsContext.ids.includes(mealId);
  const selectedMeal = MEALS.find((x) => (x.id = mealId));

  function headerButtonPressHandler() {
    if(mealIsFavorite) {
      favoriteMealsContext.removeFavorite(mealId);
    }else {
      favoriteMealsContext.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        // return <Button title='tap' onPress={headerButtonPressHandler}/>
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
  return (
    <ScrollView>
      <View style={{ marginBottom: 30 }}>
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
    alignSelf: "center",
    width: "80%",
  },
});
