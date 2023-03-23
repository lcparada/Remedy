import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMainText: {
    marginLeft: 30,
    marginTop: 78,
  },
  mainText: {
    fontSize: 28,
    fontFamily: "Lexend_600SemiBold",
    color: "#333333"
  },
  containerButtons: {
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 20,
    columnGap: 23,
  },
  textButton: {
    fontSize: 18,
    fontFamily: "Lexend_400Regular",
    alignItems: "center",
    justifyContent: "center",
  },
  selectTextButton : {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    alignItems: "center",
    justifyContent: "center",
    color: "#68A6DA"

  },
  prescriptionScreen: {
    marginLeft: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  prescriptionTextScreen: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA"
  },
  prescriptionSubTextScreen: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#333333"
  },
  statusPrescription: {
    marginRight: 32,
    flexDirection: "row",
    columnGap: 10
  },
  statusPrescriptionTextProgress: {
    fontSize: 13,
    fontFamily:"Lexend_600SemiBold",
    color: "#F6D664",
    

  },
  statusPrescriptionTextFinished: {
    fontSize: 13,
    fontFamily: "Lexend_600SemiBold",
    color: "#0B6E4F"
  },
  statusPrescriptionTextAbandoned: {
    fontSize: 13,
    fontFamily: "Lexend_600SemiBold",
    color: "#721817"
  },
  medicineScreen:{
    marginLeft: 30,
    marginTop: 22
  },
  medicineTextScreen: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA"
  },
  medicineStatus: {
    flexDirection: "row",
    columnGap: 8,
    marginTop: 8
  },
  medicineStatusTextScreenEnough: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "#0B6E4F"
  },
  medicineStatusTextScreenInsufficient: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "#721817"
  },
  medicineTextStatus: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    marginTop: 5,
    width: 260
  }

});

export default styles;
