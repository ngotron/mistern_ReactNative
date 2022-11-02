import { View, Image } from "react-native"

const Banner = () => {
    return (
        <View >
            <Image style={{ width: 405, height: 200, justifyContent: 'center' }}
                source={{ uri: 'https://img.freepik.com/free-photo/friendly-smiling-woman-looking-pleased-front_176420-20779.jpg?w=2000' }} />
        </View>
    )
}
export default Banner