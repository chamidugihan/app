import { FlatList, Text, View } from "react-native";
import products from "../assets/producr.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";


export default function HomeScreen() {
    return (
        <Button>
            <ButtonText>Press me</ButtonText>
        </Button>
    );
}