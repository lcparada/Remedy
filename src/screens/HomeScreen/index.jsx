import React from "react";

import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
} from "react-native";

import moment from "moment";

import * as Location from "expo-location";

import style from "./style";

import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import Calendar from "../../components/Calendar";

import { getHourNowWithUTC } from "../../helpers";

import FloatBottom from "../../components/FloatButtons";

import { RemedyContext } from "../../contexts/remedy";

export default function HomeScreen() {
  const { allMedicines, deleteMedicine } = React.useContext(RemedyContext);

  const [location, setLocation] = React.useState("");
  const [address, setAddress] = React.useState("");

  function GenerateTextDay() {
    const momentDay = getHourNowWithUTC();
    if (
      (momentDay >= 0 && momentDay <= 6) ||
      (momentDay > 18 && momentDay <= 23)
    ) {
      return ["boa noite", "🌙"];
    } else if (momentDay > 6 && momentDay <= 12) {
      return ["bom dia", "☀️"];
    } else if (momentDay > 12 && momentDay <= 18) {
      return ["boa tarde", "☀️"];
    }
  }

  function deleteItem(id) {
    Alert.alert("Excluir item", "Deseja mesmo excluir o item?", [
      {
        text: "Sim",
        onPress: () => deleteMedicine(id),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const getPermissions = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Please granted location permissions");
      return;
    }
    let location = await Location.getCurrentPositionAsync({});
    let adress = await Location.reverseGeocodeAsync(location.coords);
    setAddress(adress);
  };

  React.useEffect(() => {
    getPermissions();
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <StatusBar style="auto" />
      <View>
        <View style={style.containerText}>
          <Text style={style.mainText}>
            Olá,{"\n"}
            {GenerateTextDay()[0]},{" "}
            <Text style={style.usernameText}>
              Lucas! {GenerateTextDay()[1]}
            </Text>{" "}
          </Text>
          <Ionicons name="ios-person-circle-sharp" size={65} color="#68A6DA" />
        </View>

        <View style={style.containerTextEvent}>
          <Text style={style.mainText}>Hoje você tem </Text>
          <Text style={style.eventTextEvent}>
            {allMedicines.length} eventos pendentes.
          </Text>
        </View>
      </View>

      <View style={style.content}>
        <Calendar />

        <FlatList
          data={allMedicines}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onLongPress={() => deleteItem(item.id)}
                delayLongPress={1000}
              >
                <View style={style.pill}>
                  <View>
                    <Text style={style.descriptionPill}>{item.name}</Text>
                    <Text style={style.subDescriptionPill}>{item.dosage}</Text>
                  </View>

                  {item.isTake === true ? (
                    <View style={style.timePill}>
                      <Text style={style.statusTextSucess}>Concluído</Text>
                      <AntDesign
                        name="checkcircleo"
                        size={20}
                        color="#0B6E4F"
                      />
                    </View>
                  ) : item.isTake === false &&
                    moment(item.takeAt).unix() >=
                      moment().subtract(3, "hours").unix() &&
                    moment(item.takeAt).unix() <=
                      moment()
                        .subtract(3, "hours")
                        .add(10, "minutes")
                        .unix() ? (
                    <View style={style.timePill}>
                      <Text style={style.statusTextSoon}>
                        Em{" "}
                        {moment(item.takeAt).diff(
                          moment().subtract(3, "hour"),
                          "minutes"
                        ) + 1}{" "}
                        minutos
                      </Text>
                      <AntDesign
                        name="clockcircleo"
                        size={20}
                        color="#F6D664"
                      />
                    </View>
                  ) : item.isTake === false &&
                    moment()
                      .subtract(3, "hours")
                      .isAfter(
                        moment(item.takeAt)
                          .subtract(3, "hours")
                          .subtract(5, "minutes")
                      ) ? (
                    <View style={style.timePill}>
                      <Text style={style.statusTextLate}>
                        Atrasado {`\n`} há 5 minutos
                      </Text>
                      <AntDesign
                        name="exclamationcircleo"
                        size={20}
                        color="#721817"
                        style={{ marginTop: 10 }}
                      />
                    </View>
                  ) : null}
                </View>
              </TouchableOpacity>
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 35 }}
        />
      </View>
      <FloatBottom />
    </SafeAreaView>
  );
}
