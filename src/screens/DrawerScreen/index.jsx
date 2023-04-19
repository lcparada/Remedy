import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  FlatList,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import { useContext } from "react";

import { RemedyContext } from "../../contexts/remedy";

import FabButtonMedicine from "../../components/FabButtonMedicine";

import Prescriptions from "../../components/FlatListModels/Prescriptions";

import FabButtonPrescription from "../../components/FabButtonPrescription";

import Medicine from "../../components/FlatListModels/Medicine";

export default function DrawerScreen() {
  const [screen, setScreen] = React.useState(0);

  const { allMedicines, allPrescriptions } = useContext(RemedyContext);

  function handleScreenPrescription() {
    if (screen !== 0) {
      setScreen(0);
    }
  }

  function handleScreenMedicine() {
    if (screen !== 1) {
      setScreen(1);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.containerMainText}>
        <Text style={styles.mainText}>Minha Gaveta</Text>
      </View>

      <View style={styles.containerButtons}>
        <TouchableOpacity onPress={() => handleScreenPrescription()}>
          <Text style={screen === 0 ? styles.selectText : styles.textButton}>
            {" "}
            <Feather
              name="paperclip"
              size={24}
              color={screen === 0 ? "#68A6DA" : "#333333"}
            />{" "}
            Receituários
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleScreenMedicine()}>
          <Text style={screen === 1 ? styles.selectText : styles.textButton}>
            {" "}
            <Feather
              name="package"
              size={24}
              color={screen === 1 ? "#68A6DA" : "#333333"}
            />{" "}
            Medicamentos
          </Text>
        </TouchableOpacity>
      </View>

      {screen === 0 ? (
        <View>
          <FlatList
            data={allPrescriptions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Prescriptions
                tratamentIllness={item.tratamentIllness}
                date={item.date}
                medicines={item.medicines}
                nameDoctor={item.nameDoctor}
                symptoms={item.symptoms}
                observations={item.observations}
                situation={item.situation}
                id={item.id}
              />
            )}
          />

          <FabButtonPrescription />
        </View>
      ) : (
        <View>
          <FlatList
            contentContainerStyle={{ paddingBottom: 250 }}
            data={allMedicines}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Medicine
                name={item.name}
                daysMedicine={item.daysMedicine}
                timerMedicine={item.timerMedicine}
                amountMedicine={item.amountMedicine}
              />
            )}
          />
          <FabButtonMedicine />
        </View>
      )}
    </SafeAreaView>
  );
}
