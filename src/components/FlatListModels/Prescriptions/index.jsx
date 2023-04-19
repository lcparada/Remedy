import { Text, View, TouchableOpacity, Modal } from "react-native";

import { RadioButton } from "react-native-paper";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

import { useContext, useState } from "react";

import { RemedyContext } from "../../../contexts/remedy";

export default function Prescriptions({
  tratamentIllness,
  date,
  medicines,
  nameDoctor,
  symptoms,
  observations,
  situation,
  id,
}) {
  const { toggleSituation } = useContext(RemedyContext);

  const [situationPrescription, setSituationPrescription] = useState(situation);

  const [openModal, setOpenModal] = useState(false);

  function updateData() {
    toggleSituation(id, situationPrescription);
    setOpenModal(!openModal);
  }

  function typeOfSituation() {
    if (situation === "inProgress") {
      return (
        <View style={styles.statusPrescription}>
          <Text style={styles.statusPrescriptionTextProgress}>
            Em andamento
          </Text>
          <Feather name="clock" size={18} color="#F6D664" />
        </View>
      );
    } else if (situation === "finished") {
      return (
        <View style={styles.statusPrescription}>
          <Text style={styles.statusPrescriptionTextFinished}>Finalizado</Text>
          <Feather name="check-circle" size={18} color="#0B6E4F" />
        </View>
      );
    } else {
      return (
        <View style={styles.statusPrescription}>
          <Text style={styles.statusPrescriptionTextAbandoned}>Abandonado</Text>
          <Feather name="alert-circle" size={18} color="#721817" />
        </View>
      );
    }
  }

  return (
    <View title="prescriptionTotal">
      <TouchableOpacity
        onLongPress={() => setOpenModal(!openModal)}
        delayLongPress={1000}
      >
        <View style={styles.prescriptionScreen}>
          <View>
            <Text style={styles.prescriptionTextScreen}>
              {tratamentIllness}
            </Text>
            <Text style={styles.prescriptionSubTextScreen}>
              Criado em {date}
            </Text>
          </View>
          {typeOfSituation()}
        </View>
      </TouchableOpacity>

      <Modal animationType="slide" visible={openModal}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>{tratamentIllness} 🤒</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.containerTextBody}>
            <Text style={styles.textBody}>Medicamento(s) usado(s):</Text>
            <Text style={styles.subTextBody}>{medicines}</Text>
          </View>

          <View style={styles.containerTextBody}>
            <Text style={styles.textBody}>Sintoma(s):</Text>
            <Text style={styles.subTextBody}>{symptoms}</Text>
          </View>

          <View style={styles.containerTextBody}>
            <Text style={styles.textBody}>Nome do médico(a):</Text>
            <Text style={styles.subTextBody}>{nameDoctor}</Text>
          </View>

          <View style={styles.containerTextBody}>
            <Text style={styles.textBody}>Observação(ões):</Text>
            <Text style={styles.subTextBody}>{observations}</Text>
          </View>

          <View style={styles.containerTextBody}>
            <Text style={styles.textBody}>Situação:</Text>

            <View style={styles.options}>
              <RadioButton
                value="inProgress"
                status={
                  situationPrescription === "inProgress"
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => setSituationPrescription("inProgress")}
                color="#C8C8C8"
                uncheckedColor="#C8C8C8"
              />
              <Text style={styles.textOptions}>Em andamento</Text>
            </View>

            <View style={styles.options}>
              <RadioButton
                value="finished"
                status={
                  situationPrescription === "finished" ? "checked" : "unchecked"
                }
                onPress={() => setSituationPrescription("finished")}
                color="#C8C8C8"
                uncheckedColor="#C8C8C8"
              />
              <Text style={styles.textOptions}>Finalizado</Text>
            </View>

            <View style={styles.options}>
              <RadioButton
                value="abandoned"
                status={
                  situationPrescription === "abandoned"
                    ? "checked"
                    : "unchecked"
                }
                onPress={() => setSituationPrescription("abandoned")}
                color="#C8C8C8"
                uncheckedColor="#C8C8C8"
              />
              <Text style={styles.textOptions}>Abandonado</Text>
            </View>
          </View>
        </View>

        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={updateData}>
            <Text style={styles.textButton}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
