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
const Diabetic = () => {

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
                console.log("diabetic", resJson);
            })
            .catch(error => {
                console.log('Error: ', error);
            })
            .finally(() => setisLoading(false));
    };

    renderItem = ({ item, index }) => {
        return (
            <View >
                <View style={style.container}>
                    <Image style={style.imageHeader} source={{ uri: item.img }} />
                    <View >
                        <Text style={style.textHeader}>{item.title}</Text>
                    </View>
                </View>
            </View>
        );
    };
    console.log("render");
    return (
        <>
            <ScrollView >
                <Text style={{ fontSize: 25, color: 'black' }}>Diabetic Diet</Text>
                <View>
                    {isLoading ? (
                        <ActivityIndicator />
                    ) : (
                        <FlatList
                            horizontal
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
        width: 110,
        height: 162,
        marginLeft: 10,
        backgroundColor: 'grey',
        borderRadius: 10,
        fontWeight: 4,
        marginTop: 50,

    },
    imageHeader: {
        width: 110,
        height: 100,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginBottom: 10
    },
    textHeader: {
        textAlign: 'center'
    }
});





export default Diabetic;