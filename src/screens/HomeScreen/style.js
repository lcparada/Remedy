import { Platform } from "react-native";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerText: {
    marginTop: Platform.OS === "android" ? 90 : 40,
    marginLeft: 30,
    flexDirection: "row",
    columnGap: 80
  },
  mainText: {
    fontSize: 22,
    fontFamily: "Lexend_300Light",
  },
  usernameText: {
    fontSize: 22,
    fontFamily: "Lexend_700Bold",
  },
  containerTextEvent: {
    marginTop: 20,
    marginLeft: 30,
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    shadowColor: "#202020",
    shadowOffset: { width: 1, height: -6 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    paddingHorizontal: 30,
  },
  eventTextEvent: {
    color: "#68A6DA",
    fontSize: 20,
    fontFamily: "Lexend_700Bold",
  },
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
  mainTextHour: {
    fontSize: 24,
    fontFamily: "Lexend_600SemiBold",
    marginTop: 24,
  },
  descriptionPill: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  },
  subDescriptionPill: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
  },
  statusTextSoon: {
    fontSize: 12,
    fontFamily: "Lexend_600SemiBold",
    color: "#F6D664",
    marginRight: 8
  },
  statusTextSucess: {
    fontSize: 12,
    fontFamily: "Lexend_600SemiBold",
    color: "#0B6E4F",
    marginRight: 8
  },
  statusTextLate: {
    fontSize: 12,
    fontFamily: "Lexend_600SemiBold",
    color: "#721817",
    textAlign: "right",
    marginRight: 8
  },
  timePill: {
    flexDirection: "row",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default style;
