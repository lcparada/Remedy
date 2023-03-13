import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  containerData: {
    marginTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  mainTextMonth: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
  },
  button: {
    backgroundColor: "#F2F4F5",
    justifyContent: "center",
    borderRadius: 5,
    width: 30,
    height: 30,
    alignItems: "center",
  },
  mainContainerDay: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15
  },
  subMainContainerDay: {
    flexDirection: "column",
    alignItems: "center",
  },
  mainTextDay: {
    fontFamily: "Lexend_600SemiBold",
    fontSize: 28,
  },
  subTextDay: {
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
  },
  selectDay: {
    fontSize: 28,
    color: "#68A6DA",
    fontFamily: "Lexend_600SemiBold",
  },
  subSelectDay: {
    color: "#68A6DA",
    fontFamily: "Lexend_400Regular",
    fontSize: 12,
  },
  nextMonthDay: {
    color: "#cccc",
    fontSize: 28,
    fontFamily: "Lexend_600SemiBold",
  },
  subMonthDay: {
    color: "#cccc",
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
  },
});

export default style;
