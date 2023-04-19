import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  medicineScreen: {
    marginLeft: 30,
    marginTop: 22,
  },
  medicineTextScreen: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  },
  medicineStatus: {
    flexDirection: "row",
    columnGap: 8,
    marginTop: 3,
  },
  medicineStatusTextScreenEnough: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "#0B6E4F",
  },
  medicineStatusTextScreenInsufficient: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "#721817",
  },
  medicineTextStatus: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    marginTop: 5,
    width: 260,
  },
});

export default styles;
