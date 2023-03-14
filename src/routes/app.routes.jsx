import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import { NavigationContainer } from "@react-navigation/native";
import DrawerScreen from "../screens/DrawerScreen";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 76,
          },
        }}
      >
        <Tab.Screen
          name="resumo"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Feather name="calendar" size={26} color={color} />;
              } else {
                return <Feather name="calendar" size={26} color="black"/>;
              }
            },
          }}
        />
        <Tab.Screen
          name="gaveta"
          component={DrawerScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Feather name="archive" size={26} color={color} />;
              } else {
                return <Feather name="archive" size={26} color="black"/>;
              }
            },
          }}
        />
        <Tab.Screen
          name="relatório"
          component={ReportScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Feather name="menu" size={26} color={color} />;
              } else {
                return <Feather name="menu" size={26} color="black"/>;
              }
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
