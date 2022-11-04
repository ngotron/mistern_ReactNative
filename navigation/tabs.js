import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSquarePlus, faUser } from '@fortawesome/free-regular-svg-icons';
import { faH, faHome } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
// import { faSquareParking } from '@fortawesome/free-solid-svg-icons';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Profile from '../screens/Profile';
import Category from '../screens/Category';
import Pluses from '../screens/Pluses';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={
                {
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        left: 20,
                        right: 20,
                        elevation: 0,
                        backgroundColor: 'white',
                        borderRadius: 15,
                        height: 90,
                        ...style.shadow
                    }
                }
            }
            
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View  >
                            <FontAwesomeIcon icon={faHome} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Category" component={Category}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon icon={faBell} style={{ color: focused ? 'red' : 'black' }} />

                        </View>
                    )
                }}
            />
            <Tab.Screen name="Plus" component={Pluses}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View >
                            <FontAwesomeIcon icon={faSquarePlus} style={{ color: focused ? 'red' : 'black', padding: 20, background: 'black', fontSize: 40 }} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="ProductDetail" component={ProductDetail}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon icon={faCheckToSlot} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesomeIcon icon={faUser} style={{ color: focused ? 'red' : 'black' }} />
                        </View>
                    )
                }}
            />

        </Tab.Navigator >
    );
}
const style = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
});
export default Tabs;