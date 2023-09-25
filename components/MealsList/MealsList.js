import { StyleSheet,View,FlatList } from "react-native";
import MealItem from "./MealItem";

function MealsList({item}) {


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
        
        <FlatList data={item} renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
        />
    </View>
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})