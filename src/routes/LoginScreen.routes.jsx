import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

const Stack = createStackNavigator();

export default function LoginScreenRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{
                    headerShown: false
                }} />
                <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} options={{
                    headerTransparent: true,
                    headerTitle: "Voltar",
                    headerTitleStyle: {
                        fontFamily:"Lexend_400Regular",
                        fontSize: 16,
                        marginLeft: -25,
                        marginBottom: 3
                    }
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
