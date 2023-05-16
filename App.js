import { View, StyleSheet } from "react-native";
import Favourites from "./screens/Favourites";
import ProductDetails from "./screens/ProductDetails";
import ProductListing from "./screens/ProductListing";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductContext from "./context";

const Navi = createNativeStackNavigator();
const tub = createBottomTabNavigator();

function BottomTub() {
  return (
    <tub.Navigator>
      <tub.Screen
        options={{ title: "Product List" }}
        name="ProductListing"
        component={ProductListing}
      />
      <tub.Screen
        options={{ title: "Favourites" }}
        name="Favourites"
        component={Favourites}
      />
    </tub.Navigator>
  );
}

export default function Spott() {
  return (
    <ProductContext>
      <View style={styles.container}>
        <NavigationContainer>
          <Navi.Navigator>
            <Navi.Screen
              options={{ headerShown: false }}
              name="Bottom Up"
              component={BottomTub}
            />
            <Navi.Screen
              options={{ title: "Product Details" }}
              name="ProductDetails"
              component={ProductDetails}
            />
          </Navi.Navigator>
        </NavigationContainer>
      </View>
    </ProductContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
