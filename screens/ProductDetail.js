// import { NavigationContainer } from "@react-navigation/native";
// 
import React, { useEffect, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    FlatList,
    View,
    ActivityIndicator,
    Image,
    Text,
} from 'react-native';
import All from './productDetail/AllProduct';
import Banner from './productDetail/Banner';
import Diabetic from './productDetail/Diabetic';


const ProductDetail = () => {
    return (
        <View style={style.container}>
            <Banner />
            <Diabetic />
            <All />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        width: '100%',
        margin: 10
    }
})




export default ProductDetail;