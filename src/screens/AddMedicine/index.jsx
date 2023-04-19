import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Vibration,
  ActivityIndicator,
} from "react-native";

import styles from "./styles";

import { Feather } from "@expo/vector-icons";

import moment from "moment";

import { RemedyContext } from "../../contexts/remedy";

import { addUnitOfMeasureInDosage } from "../../helpers";

import { useNavigation } from "@react-navigation/native";

import uuid from "react-native-uuid";

export default function AddMedicine() {
  const navigation = useNavigation();

  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  const [nameMedicine, setNameMedicine] = React.useState("");
  const [dosageMedicine, setDosageMedicine] = React.useState("");
  const [timerMedicine, setTimerMedicine] = React.useState("");
  const [daysMedicine, setDaysMedicine] = React.useState("");
  const [amountMedicine, setAmountMedicine] = React.useState("");

  const { medicineAdd } = React.useContext(RemedyContext);

  function addButton() {
    if (
      nameMedicine === "" ||
      dosageMedicine === "" ||
      timerMedicine === "" ||
      daysMedicine === "" ||
      amountMedicine === ""
    ) {
      Alert.alert("ERRO", "Todos os campos devem ser preenchidos!");
      Vibration.vibrate();
    } else {
      medicineAdd({
        name: nameMedicine,
        dosage: addUnitOfMeasureInDosage(dosageMedicine),
        takeAtData: moment().format("L"),
        hourTake: moment().format("LT"),
        isTake: true,
        id: uuid.v4(),
        amountMedicine: amountMedicine,
        daysMedicine: daysMedicine,
        timerMedicine: timerMedicine,
      });
      navigation.navigate("HomeScreen");
    }
  }

  React.useEffect(() => {
    function onKeyboardDidShow(e) {
      setKeyboardHeight(e.endCoordinates.height - 340);
    }

    function onKeyboardDidHide() {
      setKeyboardHeight(0);
    }

    const showSubscription = Keyboard.addListener(
      "keyboardDidShow",
      onKeyboardDidShow
    );
    const hideSubscription = Keyboard.addListener(
      "keyboardDidHide",
      onKeyboardDidHide
    );
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: keyboardHeight }}
      >
        <View style={styles.containerTitle}>
          <Feather name="package" size={50} color="#68A6DA" />
          <Text style={styles.textTitle}>Adicionar medicamento</Text>
        </View>

        <View style={styles.containerMedicine}>
          <Text style={styles.textMedicine}>Qual nome do medicamento?</Text>
          <TextInput
            placeholder="Ex: Amoxilina"
            style={styles.inputMedicine}
            value={nameMedicine}
            onChangeText={setNameMedicine}
          ></TextInput>
        </View>

        <View style={styles.containerDosage}>
          <Text style={styles.textDosage}>Qual a dosagem do medicamento?</Text>
          <TextInput
            placeholder="Ex: 875"
            style={styles.inputDosage}
            value={dosageMedicine}
            onChangeText={setDosageMedicine}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerTimer}>
          <Text style={styles.textTimer}>Qual o intervalo de tempo?</Text>
          <TextInput
            placeholder="Ex: 10 horas"
            style={styles.inputTimer}
            value={timerMedicine}
            onChangeText={setTimerMedicine}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerDays}>
          <Text style={styles.textDays}>
            Quantos dias irá tomar o medicamento?
          </Text>
          <TextInput
            placeholder="Ex: 3 dias"
            style={styles.inputDays}
            value={daysMedicine}
            onChangeText={setDaysMedicine}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerAmount}>
          <Text style={styles.textAmount}>
            Qual a quantidade de comprimidos?
          </Text>
          <TextInput
            placeholder="Ex: 30 comprimidos"
            style={styles.inputAmount}
            value={amountMedicine}
            onChangeText={setAmountMedicine}
            keyboardType="numeric"
          ></TextInput>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button} onPress={addButton}>
            <Text style={styles.textButton}>Adicionar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
