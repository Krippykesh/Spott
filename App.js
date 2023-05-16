import {  View, StyleSheet } from 'react-native';
import {Favourites} from './screens/Favourites';
//import ProductDetails from "./screens/ProductDetails";
//   <ProductDetails/>
import ProductListing from "./screens/ProductListing";

export default function Spott(){
  return (
    <View style={styles.container}> 
    <ProductListing />
    <Favourites/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
