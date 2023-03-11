import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  mainContainer: {
    width: 150,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 1,
    elevation: 0.2,
  },

  mainText: {
    fontSize: 24,
    fontFamily: "Lexend_600SemiBold",
    marginLeft: 30,
    marginTop: 23,
  },

  textPill: {
    marginLeft: 30,
    marginTop: 15,
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
  },

  statusTextSucess: {
    fontSize: 12,
    fontFamily: "Lexend_600SemiBold",
    color: "#0B6E4F",
    marginLeft: 33,
  },

  statusTextLate: {
    fontSize: 12,
    fontFamily: "Lexend_600SemiBold",
    color: "#721817",
    marginLeft: 16,
    width: 85,
    marginTop: 10
  },

  timePill: {
    flexDirection: "row",
    columnGap: 10,
    marginLeft: 30,
    marginTop: 20,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 80,
  },
});

export default style;
