import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: styles.header,
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#333" },
          }}
        >
          <Stack.Screen
            name="MealCategory"
            component={CategoriesScreen}
            options={{
              title: "Danh mục món ăn",
              // headerStyle: styles.header,
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#333" },
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}
          //  options={({route})=> {
          //   const cat = route.params.categoryId;
          //   return{title:cat}}} 
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#351",
  },
});
