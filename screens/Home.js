import React, { useEffect, useState } from "react";
import { View, Text, Button, SafeAreaView } from "react-native";
import ProductDetail from "./ProductDetail";
const Home = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Button
                    title="Go to Details"
                    onPress={() => navigation.navigate('ProductDetail')}
                />
            </View>
        </SafeAreaView>

    )
}

export default Home;