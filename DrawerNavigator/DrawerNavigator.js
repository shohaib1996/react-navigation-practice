import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import { useNavigation } from '@react-navigation/native';
import Favourites from '../DrawerScreen/Favourites';
import Profile from '../DrawerScreen/Profile';
import { Ionicons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    const [homeActive, setHomeActive] = useState(false)
    const [videosActive, setVideosActive] = useState(false)
    const [favouritesActive, setFavouritesActive] = useState(false)
    const [profileActive, setProfileActive] = useState(false)


    const navigation = useNavigation()
    // const currentRoute = props.state.routeNames[props.state.index]






    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.userInfoWrapper}>
                <Image
                    source={{ uri: "https://i.ibb.co/42Jp7pN/Screenshot-2024-01-29-182723.png" }}
                    width={80}
                    height={80}
                    style={styles.userImg}
                />
                <View style={styles.userDetailsWrapper}>
                    <Text style={styles.userName}>Dr. Eng. Shimul</Text>
                    <Text style={styles.userEmail}>facebook.com/shimul186</Text>
                </View>
            </View>
            <DrawerItem
                label={"Home"}
                labelStyle={{
                    color : homeActive ? "white": "black",
                    marginLeft: -20,
                }}
                icon={() => (
                    <Ionicons name="home" size={24} color={homeActive ? "white" : "black"} />
                )}
                onPress={() => {
                    navigation.navigate("Home");
                    setHomeActive(true);
                    setVideosActive(false);
                    setProfileActive(false)
                    setFavouritesActive(false)
                }}
                style={{ backgroundColor: homeActive ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Videos"}
                labelStyle={{
                    color : videosActive ? "white": "black",
                    marginLeft: -20,
                }}
                icon={() => (
                    <Ionicons name="play" size={24} color={videosActive ? "white" : "black"} />
                )}
                onPress={() => {
                    navigation.navigate("Home");
                    setHomeActive(false);
                    setVideosActive(true);
                    setProfileActive(false)
                    setFavouritesActive(false)
                }}
                style={{ backgroundColor: videosActive ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Favourites"}
                labelStyle={{
                    color : favouritesActive ? "white": "black",
                    marginLeft: -20,
                }}
                icon={() => (
                    <Ionicons name="heart" size={24} color={favouritesActive ? "white" : "black"} />
                )}
                onPress={() => {
                    navigation.navigate("Home");
                    setHomeActive(false);
                    setVideosActive(false);
                    setProfileActive(false)
                    setFavouritesActive(true)
                }}
                style={{ backgroundColor: favouritesActive ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Profile"}
                labelStyle={{
                    color : profileActive ? "white": "black",
                    marginLeft: -20,
                }}
                icon={() => (
                    <Ionicons name="people" size={24} color={profileActive ? "white" : "black"} />
                )}
                onPress={() => {
                    navigation.navigate("Home");
                    setHomeActive(false);
                    setVideosActive(false);
                    setProfileActive(true)
                    setFavouritesActive(false)
                }}
                style={{ backgroundColor: profileActive ? "#f72585" : "#fff" }}
            />

        </DrawerContentScrollView>
    )
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                drawerPosition: "right",
                headerRight: () => <DrawerToggleButton />,
                headerLeft: () => (
                    <Image
                        source={require("../assets/pixabay.png")}
                        style={styles.logo}
                    />
                ),
            }}>
            <Drawer.Screen
                name="Home_drawer"
                component={BottomTabNavigator}
                options={{
                    title: "",
                }}
            />

            <Drawer.Screen name="Favourites" component={Favourites} />
            <Drawer.Screen name="Profile" component={Profile} />

        </Drawer.Navigator>
    );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
    logo: {
        width: 70,
        height: 70,
        marginLeft: 10,
    },
    userInfoWrapper: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    userImg: {
        borderRadius: 40,
    },
    userDetailsWrapper: {
        marginTop: 25,
        marginLeft: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userEmail: {
        fontSize: 16,
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    }
});
