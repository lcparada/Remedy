import { View, Text } from "react-native";

import styles from "./styles";

import { calculateNeededMedicine } from "../../../helpers";

import { Feather } from "@expo/vector-icons";

export default function Medicine({
  name,
  daysMedicine,
  timerMedicine,
  amountMedicine,
}) {
  return (
    <View title="medicineTotal">
      <View style={styles.medicineScreen}>
        <Text style={styles.medicineTextScreen}>{name}</Text>
        <View style={styles.medicineStatus}>
          {calculateNeededMedicine(
            daysMedicine,
            timerMedicine,
            amountMedicine
          )[1] ? (
            <View style={styles.medicineStatus}>
              <Feather name="check-circle" size={18} color="#0B6E4F" />
              <Text style={styles.medicineStatusTextScreenEnough}>
                Suficiente
              </Text>
            </View>
          ) : (
            <View style={styles.medicineStatus}>
              <Feather name="check-circle" size={18} color="#721817" />
              <Text style={styles.medicineStatusTextScreenInsufficient}>
                Insuficiente
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.medicineTextStatus}>
          • Você contém {amountMedicine} comprimidos.
        </Text>
        <Text style={styles.medicineTextStatus}>
          • Você precisa de{" "}
          {
            calculateNeededMedicine(
              daysMedicine,
              timerMedicine,
              amountMedicine
            )[0]
          }{" "}
          comprimidos para concluir seus tratamentos
        </Text>
      </View>
    </View>
  );
}
