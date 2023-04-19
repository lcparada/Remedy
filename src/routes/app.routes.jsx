import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ReportScreen from "../screens/ReportScreen";
import DrawerScreen from "../screens/DrawerScreen";
import AddMedicine from "../screens/AddMedicine";
import ProfileScreen from "../screens/ProfileScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import InformationAppScreen from "../screens/InformationAppScreen";
import AddPrescription from "../screens/AddPresciption";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export function ProfileScreenStack() {
  return (
    <Stack.Navigator initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="ChangePasswordScreen"
        component={ChangePasswordScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="InformationAppScreen"
        component={InformationAppScreen}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export function HomeScreenStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AddMedicine"
        component={AddMedicine}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="AddPrescription"
        component={AddPrescription}
        options={{
          headerTransparent: true,
          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}

export function AppRoutes() {
  const [color, setColor] = React.useState("");

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="resumo"
        component={HomeScreenStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Feather name="calendar" size={size} color="#68A6DA" />;
            } else {
              return <Feather name="calendar" size={size} color="black" />;
            }
          },
          tabBarLabel: ({ size, color, focused }) => {
            if (focused) {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#68A6DA",
                    fontSize: 10,
                  }}
                >
                  resumo
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#333333",
                    fontSize: 10,
                  }}
                >
                  resumo
                </Text>
              );
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
              return <Feather name="menu" size={size} color="#68A6DA" />;
            } else {
              return <Feather name="menu" size={size} color="black" />;
            }
          },
          tabBarLabel: ({ size, color, focused }) => {
            if (focused) {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#68A6DA",
                    fontSize: 10,
                  }}
                >
                  relatório
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#333333",
                    fontSize: 10,
                  }}
                >
                  relatório
                </Text>
              );
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
              return <Feather name="archive" size={size} color="#68A6DA" />;
            } else {
              return <Feather name="archive" size={size} color="black" />;
            }
          },
          tabBarLabel: ({ size, color, focused }) => {
            if (focused) {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#68A6DA",
                    fontSize: 10,
                  }}
                >
                  gaveta
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#333333",
                    fontSize: 10,
                  }}
                >
                  gaveta
                </Text>
              );
            }
          },
        }}
      />
      <Tab.Screen
        name="perfil"
        component={ProfileScreenStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return (
                <Ionicons name="person-outline" size={size} color="#68A6DA" />
              );
            } else {
              return (
                <Ionicons name="person-outline" size={size} color="black" />
              );
            }
          },
          tabBarLabel: ({ size, color, focused }) => {
            if (focused) {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#68A6DA",
                    fontSize: 10,
                  }}
                >
                  perfil
                </Text>
              );
            } else {
              return (
                <Text
                  style={{
                    bottom: 15,
                    fontFamily: "Lexend_300Light",
                    color: "#333333",
                    fontSize: 10,
                  }}
                >
                  perfil
                </Text>
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
