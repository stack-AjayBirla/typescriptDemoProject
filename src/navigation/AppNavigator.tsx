import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home/Home";
import Login from "../screens/Login";

const stack = createNativeStackNavigator()

const AppNavigator: React.FC = () => {
    interface Props {
        name: string;
        component: any
    }
    return (
        <NavigationContainer>
            <stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="Login" >
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Login" component={Login} />
            </stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;