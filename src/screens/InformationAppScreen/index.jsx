import React from "react";
import { View, SafeAreaView, Text } from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function InformationAppScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMainText}>
        <Feather name="alert-circle" size={30} color="#333333" />
        <Text style={styles.mainText}>Informações do app</Text>
      </View>
      <View style={styles.containerQuestionText}>
        <Text style={styles.questionText}>O que é o RemedyTime?</Text>
        <Text style={styles.descriptionText}>
          RemedyTime é um aplicativo projetado para ajudar as pessoas a
          gerenciar e lembrar de tomar seus medicamentos de forma mais fácil e
          eficiente. Com o aplicativo, você pode configurar lembretes para tomar
          seus medicamentos nos horários corretos, acompanhar a dosagem e
          duração do tratamento, e até mesmo registrar sintomas e efeitos
          colaterais. Isso pode ajudar a garantir que você tome seus
          medicamentos conforme prescrito pelo seu médico, o que é fundamental
          para o sucesso do tratamento. Além disso, o aplicativo também pode
          ajudar a evitar erros de dosagem ou de esquecimento, o que pode ser
          perigoso para a sua saúde.
        </Text>
      </View>

      <View style={styles.containerQuestionText}>
        <Text style={styles.questionText}>Quando nasceu o RemedyTime?</Text>
        <Text style={styles.descriptionText}>
          A ideia do aplicativo nasceu em meados de 2022, mas foi lançada apenas
          no início de 2023. Além disso, temos novas ideias para expandir cada
          vez mais o app com o intuito de facilitar o pedido de remédios.
        </Text>
      </View>
    </SafeAreaView>
  );
}
