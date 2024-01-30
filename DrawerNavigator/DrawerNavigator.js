import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomTabNavigator/BottomTabNavigator';
import { useNavigation } from '@react-navigation/native';
import Favourites from '../DrawerScreen/Favourites';
import Profile from '../DrawerScreen/Profile';


const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {

    const [active, setactive] = useState(false)

    const navigation = useNavigation()
    // const currentRoute = props.state.routeNames[props.state.index]

    console.log(navigation.isFocused());
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
                onPress={() => navigation.navigate("Home")}
                style={{ backgroundColor: navigation.isFocused()  == "true" ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Videos"}
                onPress={() => navigation.navigate("Videos")}
                style={{ backgroundColor: navigation.isFocused()  == "true" ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Favourites"}
                onPress={() => navigation.navigate("Favourites")}
                style={{ backgroundColor: navigation.isFocused()  == "true" ? "#f72585" : "#fff" }}
            />
            <DrawerItem
                label={"Profile"}
                onPress={() => navigation.navigate("Profile")}
                style={{ backgroundColor: navigation.isFocused()  == "true" ? "#f72585" : "#fff" }}
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
