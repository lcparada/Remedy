import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native"

import styles from "./styles";

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ProfileScreen() {

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
                <MaterialCommunityIcons name="email-outline" size={18} color="#B8B8C4" />
                <Text style={styles.textEmail}>loparada@gmail.com</Text>
            </View>

            <View style={styles.options}>
                <TouchableOpacity style={styles.containerEditProfile}>
                    <View style={styles.circle}><Feather name="edit-3" size={22} color="white" /></View>
                    <Text style={styles.textConfig}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerResetPassword}>
                    <View style={styles.circle}><Feather name="lock" size={22} color="white" /></View>
                    <Text style={styles.textConfig}>Redefinir Senha</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerChangeLocation}>
                    <View style={styles.circle}><Ionicons name="location-outline" size={22} color="white" /></View>
                    <Text style={styles.textConfig}>Mudar localização</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerInformationApp}>
                    <View style={styles.circle}><MaterialCommunityIcons name="information-outline" size={22} color="white" /></View>
                    <Text style={styles.textConfig}>Informações do App</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.containerLogOut}>
                    <View style={styles.circleLogOut}><MaterialIcons name="logout" size={22} color="white" /></View>
                    <Text style={styles.textConfig}>Sair</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>

    )
}


