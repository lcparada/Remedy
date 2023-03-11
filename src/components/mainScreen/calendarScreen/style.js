import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    marginTop: 30,
    width: "100%",
    height: 158,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    shadowColor: "#202020",
    shadowOffset: { width: 1, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 2,
  },

  containerData: {
    marginTop: 30,
    marginLeft: 45,
    flexDirection: "row",
    columnGap: 70,
  },

  mainText: {
    fontSize: 16,
    fontFamily: "Lexend_400Regular",
  },

  button: {
    backgroundColor: "#F2F4F5",
    justifyContent: "center",
    borderRadius: 5,
  },

  mainContainerDay: {
    width: 100,
    height: 100,
    flexDirection: "row",
    marginLeft: 30,
    columnGap: 16,
    alignItems: "center",
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
