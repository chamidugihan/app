import { FlatList, Text, View } from "react-native";
import products from "../assets/producr.json";
import ProductListItem from "../components/ProductListItem";


export default function HomeScreen() {
    return (
        <FlatList data={products} renderItem={
            ({ item }) =>
                <ProductListItem  product={item}/>
        } />
    );
}