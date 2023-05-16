
import  useContext  from "react";
import { ActivityIndicator, Text, View, StyleSheet } from "react-native";
import Context from "../../context"   

export default function ProductListing() {
  const { Loading, products } = useContext(Context)
  if (Loading) {
    <ActivityIndicator styles={style.Loader} color={"yellow"} size="large" />;
  }
  return (
    <View>
    <FlatList
        data={Product}
        renderItem={(itemData) => <Text>{itemData.item.title}</Text>}
        keyExtractor={(itemData) => itemData.id}
      />;
      <Text>Product Listing </Text>
    </View>
  );
}

const style = StyleSheet.create({
  Loader: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
