import React from "react";
import style from "./styles";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { View, TouchableOpacity, Text, AppState } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  calculateTimeIntervalBetweenSevenDays,
  calculateUtcOffsetInHours,
  getDayOfTheWeek,
  getMonth,
} from "../../helpers";

export default function Calendar() {
  const navigation = useNavigation();

  const [selectedDay, setSelectedDay] = React.useState(
    moment().add(calculateUtcOffsetInHours(), "hours")
  );

  const [days, setDays] = React.useState(
    calculateTimeIntervalBetweenSevenDays()
  );

  function handleChangeSelectedDay(date) {
    setSelectedDay(moment(date).add(calculateUtcOffsetInHours(), "hours"));
  }

  function handleRecalculateDays() {
    setDays(calculateTimeIntervalBetweenSevenDays());
    setSelectedDay(moment().add(calculateUtcOffsetInHours(), "hours"));
  }

  function handlePassAfterWeek() {
    const date = moment(days[3].add(7, "days"));
    setSelectedDay(date);
    setDays(calculateTimeIntervalBetweenSevenDays(date));
  }

  function handlePassBeforeWeek() {
    const date = moment(days[3].subtract(7, "days"));
    setSelectedDay(date);
    setDays(calculateTimeIntervalBetweenSevenDays(date));
  }

  React.useEffect(() => {
    const subscription = AppState.addEventListener("change", (appState) => {
      if (appState === "active") {
        handleRecalculateDays();
      }
    });

    return () => {
      subscription.remove();
    };
  }, [navigation]);

  return (
    <View>
      <View style={style.containerData}>
        <TouchableOpacity style={style.button} onPress={handlePassBeforeWeek}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>

        <Text style={style.mainTextMonth}>
          {getMonth()[new Date(selectedDay).getMonth()]}{" "}
          {new Date(selectedDay).getFullYear()}
        </Text>

        <TouchableOpacity style={style.button} onPress={handlePassAfterWeek}>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={style.mainContainerDay}>
        {days.map((date, index) => {
          const isSelected =
            new Date(date).getDate() === new Date(selectedDay).getDate();
          return (
            <TouchableOpacity
              style={style.subMainContainerDay}
              onPress={() => handleChangeSelectedDay(date)}
              key={index}
            >
              <Text style={!isSelected ? style.mainTextDay : style.selectDay}>
                {moment(date).format("DD")}
              </Text>
              <Text style={!isSelected ? style.subTextDay : style.subSelectDay}>
                {getDayOfTheWeek()[new Date(date).getDay()]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
