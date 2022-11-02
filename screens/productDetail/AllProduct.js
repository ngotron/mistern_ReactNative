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
const All = () => {

    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        if (isLoading) getListPhotos();
    }, []);

    getListPhotos = () => {
        const apiURL = 'https://62904135665ea71fe12f6eef.mockapi.io/products';
        fetch(apiURL)
            .then(res => res.json())
            .then(resJson => {
                setData(resJson);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
            .finally(() => setisLoading(false));
    };

    renderItem = ({ item, index }) => {
        return (
            <View style={{ flexDirection: 'column' }}>
                <View style={style.container}>
                    <Image style={style.imageHeader} source={{ uri: item.img }} />
                    <View >
                        <Text style={style.textHeader}>{item.title}</Text>
                    </View>
                    <View >
                        <Text style={style.priceHeader}>{item.price}</Text>
                    </View>
                </View>
            </View>
        );
    };
    console.log("render");
    return (
        <>
            <ScrollView >
                <Text style={{ fontSize: 25, color: 'black' }}>All product</Text>
                <View>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            numColumns={2}
                            showsHorizontalScrollIndicator={false}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => `key-${item.id}`}>
                        </FlatList>
                    )}
                </View>
            </ScrollView>
        </>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: 157,
        height: 250,
        marginLeft: 30,
        marginRight: -20,
        backgroundColor: 'grey',
        borderRadius: 10,
        fontWeight: 4,
        marginTop: 30,
    },
    imageHeader: {
        width: 157,
        height: 157,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 15,
    },
    textHeader: {
        textAlign: 'center'
    },
    priceHeader: {
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    }
});





export default All;