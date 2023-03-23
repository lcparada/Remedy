import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import SendEmailPasswordScreen from "../screens/SendEmailPasswordScreen";
import AppRoutes from "./app.routes";

const Stack = createStackNavigator();

export default function LoginScreenRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="SendEmailPasswordScreen"
        component={SendEmailPasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="HomeScreen" component={AppRoutes} />
    </Stack.Navigator>
  );
}
