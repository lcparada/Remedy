import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export function RootRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthRoutes"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
        <Stack.Screen name="AppRoutes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
