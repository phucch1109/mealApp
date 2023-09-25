
import { StyleSheet, Text, View ,FlatList} from "react-native";
import { MEALS ,CATEGORIES} from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect ,useLayoutEffect} from "react";
        //  import { useRoute } from "@react-navigation/native";

function MealsOverViewScreen({route,navigation}) {
    
    const cateID = route.params.categoryId;
    const displayedMeals = MEALS.filter((x) => {
        return x.categoryIds.indexOf(cateID)>=0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((x) => x.id === cateID).title;
        navigation.setOptions({title:categoryTitle});
    },[cateID,navigation])

   
  

    function renderMealItem(itemData) {
        let item = itemData.item;
        let mealItemProps = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            duration: item.duration,
            complexity: item.complexity
        }
        return <MealItem {...mealItemProps}/>;

    }

    return <View style={styles.container}>
        
        <FlatList data={displayedMeals} renderItem={renderMealItem}
        keyExtractor={(item) => item.id}

        />
    </View>
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})