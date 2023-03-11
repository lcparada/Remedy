import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";


import style from "./style";

export default function CalendarScreen() {
  return (
    
    <SafeAreaView>
      
      <View style={style.mainContainer}>
        <View style={style.containerData}>

          <TouchableOpacity style={style.button}>
            <AntDesign name="left" size={24} color="black" />
          </TouchableOpacity>

          <Text style={style.mainText}>Dezembro 2022</Text>

          <TouchableOpacity style={style.button}>
            <AntDesign name="right" size={24} color="black" />
          </TouchableOpacity>

        </View>



        <View style={style.mainContainerDay}>
          <View style = {style.subMainContainerDay}>
            <Text style={style.mainTextDay}>27</Text>
            <Text style={style.subTextDay}>TER</Text>
          </View> 

          <View style = {style.subMainContainerDay}>
            <Text style={style.mainTextDay}>28</Text>
            <Text style={style.subTextDay}>QUA</Text>
          </View>

          <View style = {style.subMainContainerDay}>
            <Text style={style.mainTextDay}>29</Text>
            <Text style={style.subTextDay}>QUI</Text>
          </View>

          <View style = {style.subMainContainerDay}>
            <Text style={style.selectDay}>30</Text>
            <Text style={style.subSelectDay}>SEX</Text>
          </View>

          <View style = {style.subMainContainerDay}>
            <Text style={style.mainTextDay}>31</Text>
            <Text style={style.subTextDay}>SAB</Text>
          </View>

          <View style = {style.subMainContainerDay}>
            <Text style={style.nextMonthDay}>01</Text>
            <Text style={style.subMonthDay}>DOM</Text>
          </View>

          <View style = {style.subMainContainerDay}>
            <Text style={style.nextMonthDay}>02</Text>
            <Text style={style.subMonthDay}>SEG</Text>
          </View>
        </View>

        
      </View>

    </SafeAreaView>
  );
}
