import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import List from '../screens/List';
import Videos from '../screens/Videos';
import { Ionicons } from '@expo/vector-icons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'settings' : 'settings-outline';
                    } else if (route.name === 'Videos') {
                        iconName = focused ? "play" : "play-outline"
                    } else if (route.name === 'List') {
                        iconName = focused ? "list-circle" : "list-circle-outline"
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    height: 60,
                },
                headerShown: false

            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",

                    }
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    title: "Settings",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",

                    }
                }}
            />
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    title: "List",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",

                    }
                }}
            />
            <Tab.Screen
                name="Videos"
                component={Videos}
                options={{
                    title: "Videos",
                    tabBarLabelStyle: {
                        fontSize: 16,
                        fontWeight: "bold",

                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator

const styles = StyleSheet.create({})