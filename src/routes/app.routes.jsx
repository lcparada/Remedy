import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons'; 

import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import DrawerScreen from "../screens/DrawerScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="resumo"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Feather name="calendar" size={size} color={color} />;
              } else {
                return <Feather name="calendar" size={size} color="black"/>;
              }
            },
          }}
        />
        <Tab.Screen
          name="relatorio"
          component={ReportScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => {
              if (focused) {
                return <Feather name="menu" size={size} color={color} />;
              } else {
                return <Feather name="menu" size={size} color="black"/>;
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
                return <Feather name="archive" size={size} color={color} />;
              } else {
                return <Feather name="archive" size={size} color="black"/>;
              }
            },
          }}
        />
        <Tab.Screen 
        name="perfil"
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({ color, size, focused}) => {
            if(focused) {
              return <Ionicons name="person-outline" size={size} color={color} />
            } else {
              return <Ionicons name="person-outline" size={size} color="black"/>
            }
          }
        }}/>
      </Tab.Navigator>
  );
}
