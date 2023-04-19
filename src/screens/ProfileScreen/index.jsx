import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMainText}>
        <Text style={styles.mainText}>Meu Perfil</Text>
      </View>

      <View style={styles.containerIcon}>
        <Ionicons name="ios-person-circle-sharp" size={90} color="#68A6DA" />
      </View>

      <View style={styles.containerUsername}>
        <Text style={styles.username}>Lucas Parada</Text>
      </View>

      <View style={styles.containerEmail}>
        <MaterialCommunityIcons
          name="email-outline"
          size={18}
          color="#B8B8C4"
        />
        <Text style={styles.textEmail}>loparada@gmail.com</Text>
      </View>

      <View style={styles.options}>
        <TouchableOpacity
          style={styles.containerEditProfile}
          onPress={() => navigation.navigate("EditProfileScreen")}
        >
          <View style={styles.circle}>
            <Feather name="edit-3" size={22} color="white" />
          </View>
          <Text style={styles.textConfig}>Editar perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("ChangePasswordScreen")}
          style={styles.containerResetPassword}
        >
          <View style={styles.circle}>
            <Feather name="lock" size={22} color="white" />
          </View>
          <Text style={styles.textConfig}>Redefinir senha</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("InformationAppScreen")}
          style={styles.containerInformationApp}
        >
          <View style={styles.circle}>
            <MaterialCommunityIcons
              name="information-outline"
              size={22}
              color="white"
            />
          </View>
          <Text style={styles.textConfig}>Informações do app</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerLogOut}>
          <View style={styles.circleLogOut}>
            <MaterialIcons name="logout" size={22} color="white" />
          </View>
          <Text style={styles.textConfig}>Sair</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
