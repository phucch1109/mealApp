

import { MEALS ,CATEGORIES} from "../data/dummy-data";
import { useEffect ,useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";
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
    return <MealsList item={displayedMeals}/>
   
  
}

export default MealsOverViewScreen;
