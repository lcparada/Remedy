import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import FloatBottom from "../../components/FloatBottom";

export default function DrawerScreen() {
  const [screen, setScreen] = React.useState(0);

  const selectText = {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  };

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
          <Text style={screen === 0 ? selectText : styles.textButton}>
            {" "}
            <Feather
              name="paperclip"
              size={24}
              color={screen === 0 ? "#68A6DA" : "black"}
            />{" "}
            Receituários
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleScreenMedicine()}>
          <Text style={screen === 1 ? selectText : styles.textButton}>
            {" "}
            <Feather
              name="package"
              size={24}
              color={screen === 1 ? "#68A6DA" : "black"}
            />{" "}
            Medicamentos
          </Text>
        </TouchableOpacity>
      </View>

      {screen === 0 ? (
        <View title="prescriptionTotal">
          <View style={styles.prescriptionScreen}>
            <View>
              <Text style={styles.prescriptionTextScreen}>
                Infecções{"\n"}gastrointestinais
              </Text>
              <Text style={styles.prescriptionSubTextScreen}>
                Criado em 30/12/2022
              </Text>
            </View>
            <View style={styles.statusPrescription}>
              <Text style={styles.statusPrescriptionTextProgress}>
                Em andamento
              </Text>
              <Feather name="clock" size={18} color="#F6D664" />
            </View>
          </View>

          <View style={styles.prescriptionScreen}>
            <View>
              <Text style={styles.prescriptionTextScreen}>Resfriado</Text>
              <Text style={styles.prescriptionSubTextScreen}>
                Criado em 20/12/2022
              </Text>
            </View>
            <View style={styles.statusPrescription}>
              <Text style={styles.statusPrescriptionTextFinished}>
                Finalizado
              </Text>
              <Feather name="check-circle" size={18} color="#0B6E4F" />
            </View>
          </View>

          <View style={styles.prescriptionScreen}>
            <View>
              <Text style={styles.prescriptionTextScreen}>Resfriado</Text>
              <Text style={styles.prescriptionSubTextScreen}>
                Criado em 20/12/2022
              </Text>
            </View>
            <View style={styles.statusPrescription}>
              <Text style={styles.statusPrescriptionTextAbandoned}>
                Abandonado
              </Text>
              <Feather name="alert-circle" size={18} color="#721817" />
            </View>
          </View>
        </View>
      ) : (
        <View title="medicineTotal">
          <View style={styles.medicineScreen}>
            <Text style={styles.medicineTextScreen}>Amoxilina</Text>

            <View style={styles.medicineStatus}>
              <Feather name="check-circle" size={18} color="#0B6E4F" />
              <Text style={styles.medicineStatusTextScreenEnough}>
                Suficiente
              </Text>
            </View>

            <Text style={styles.medicineTextStatus}>
              • Você contêm 30 comprimidos.
            </Text>

            <Text style={styles.medicineTextStatus}>
              • Você precisa de 20 comprimidos para concluir seus tratamentos
            </Text>
          </View>

          <View style={styles.medicineScreen}>
            <Text style={styles.medicineTextScreen}>Amoxilina</Text>

            <View style={styles.medicineStatus}>
              <Feather name="alert-circle" size={18} color="#721817" />
              <Text style={styles.medicineStatusTextScreenInsufficient}>
                Insuficiente
              </Text>
            </View>

            <Text style={styles.medicineTextStatus}>
              • Você contêm 30 comprimidos.
            </Text>

            <Text style={styles.medicineTextStatus}>
              • Você precisa de 20 comprimidos para concluir seus tratamentos
            </Text>
          </View>
        </View>
      )}
      <FloatBottom />
    </SafeAreaView>
  );
}
