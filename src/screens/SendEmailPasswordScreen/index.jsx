import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"
import React from "react"

import styles from "./styles"

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function SendEmailPasswordScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerLogo}>
                <MaterialCommunityIcons name="email-outline" size={60} color="white" />
            </View>

            <View style={styles.containerMainText}>
                <Text style={styles.mainText}>Verifique seu email!</Text>
            </View>

            <View style={styles.containerSubText}>
                <Text style={styles.subText}>Nós enviamos o email com as instruções para redefinir sua senha. Antes de reenviar um outro email, verifique sua caixa de spam!</Text>
            </View>

            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}><Text style={styles.textButton}>Ok</Text></TouchableOpacity>
            </View>

            <View style={styles.containerResend}>
                <Text style={styles.textResend}>Não recebeu o email?</Text>
                <TouchableOpacity ><Text style={styles.textButtonResend}>Reenviar!</Text></TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}