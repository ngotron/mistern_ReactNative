import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProductDetail from "./screens/ProductDetail";
import Tabs from "./navigation/tabs";

import { View, TouchableOpacity } from 'react-native';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => {
          return {
            animation: 'fade_from_bottom',
            headerLeft: () => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <View  >
                    <FontAwesomeIcon icon={faArrowLeft} style={{ color: navigation ? 'black' : 'grey' }} />
                  </View>
                </TouchableOpacity>
              );
            },
          };
        }}
        initialRouteName="Tabs"
      >
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}






  // const App = () => {
  //   // const Stack = createNativeStackNavigator();
  //   return (
  //     <NavigationContainer>
  //       <Tabs />
  //       {/* <Image
  //       style={{ width: 50, height: 50, borderRadius: 50 }}
  //       resizeMode='contain'
  //       source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsTVAHqW7JOWGkHNegTvsHLfR5XRle01lHGg&usqp=CAU' }}
  //     />
  //     <Text style={{ fontSize: 15, margin:15 }}>Home</Text> */}
  //       {/*  */}
  //     </NavigationContainer>

  //   );
  // }

  // export default App;