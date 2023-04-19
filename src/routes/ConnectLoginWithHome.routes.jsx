import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

import { AppRoutes } from "./app.routes";
import LoginScreenRoutes from "./LoginScreen.routes";

export default function ConnectLoginWithHome() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreenRoutes"
          component={LoginScreenRoutes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AppRoutes"
          component={AppRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
