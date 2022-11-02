import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";


const App = () => {
  // const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Image
        style={{ width: 50, height: 50, borderRadius: 50 }}
        resizeMode='contain'
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTVAHqW7JOWGkHNegTvsHLfR5XRle01lHGg&usqp=CAU' }}
      />
      <Text style={{ fontSize: 15, margin:15 }}>Home</Text> */}
      {/*  */}
    </NavigationContainer>

  );
}

export default App;