import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  ScrollView,
  Vibration,
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import { useState, useContext } from "react";

import { RemedyContext } from "../../contexts/remedy";

import moment from "moment";

import { useNavigation } from "@react-navigation/native";

import uuid from "react-native-uuid";

export default function AddPrescription() {
  const navigation = useNavigation();

  const { prescriptionAdd } = useContext(RemedyContext);

  const [tratamentIllness, setTratamentIllness] = useState("");
  const [medicines, setMedicines] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [nameDoctor, setNameDoctor] = useState("");
  const [observations, setObservations] = useState("");

  function sendData() {
    if (
      tratamentIllness === "" ||
      medicines === "" ||
      symptoms === "" ||
      nameDoctor === "" ||
      observations === ""
    ) {
      Alert.alert("ERRO", "Todos os campos devem ser preenchidos!");
      Vibration.vibrate();
    } else {
      prescriptionAdd({
        tratamentIllness: tratamentIllness,
        medicines: medicines,
        symptoms: symptoms,
        nameDoctor: nameDoctor,
        observations: observations,
        date: moment().format("DD/MM/YYYY"),
        id: uuid.v4(),
        situation: "inProgress",
      });
      navigation.navigate("HomeScreen");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        <View style={styles.header}>
          <Feather name="paperclip" size={35} color="#68A6DA" />
          <Text style={styles.textHeader}>Criar receituário</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.containerInput}>
            <View>
              <Text style={styles.textInput}>Tratamento para qual doença?</Text>
              <TextInput
                style={styles.input}
                placeholder="Resfriado"
                cursorColor="#929292"
                value={tratamentIllness}
                onChangeText={setTratamentIllness}
              ></TextInput>
            </View>

            <View>
              <Text style={styles.textInput}>Qual ou quais medicamento?</Text>
              <TextInput
                style={styles.input}
                placeholder="Amoxilina"
                cursorColor="#929292"
                value={medicines}
                onChangeText={setMedicines}
              ></TextInput>
            </View>

            <View>
              <Text style={styles.textInput}>Quais sintomas?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Dor de cabeça, tosse.."
                cursorColor="#929292"
                value={symptoms}
                onChangeText={setSymptoms}
              ></TextInput>
            </View>

            <View>
              <Text style={styles.textInput}>Qual nome do médico?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Lucas Parada"
                cursorColor="#929292"
                value={nameDoctor}
                onChangeText={setNameDoctor}
              ></TextInput>
            </View>

            <View>
              <Text style={styles.textInput}>Alguma observação?</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: Tomar somente com água"
                cursorColor="#929292"
                multiline={true}
                value={observations}
                onChangeText={setObservations}
              ></TextInput>
            </View>
          </View>

          <View style={styles.containerButton}>
            <TouchableOpacity style={styles.button} onPress={sendData}>
              <Text style={styles.textButton}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
