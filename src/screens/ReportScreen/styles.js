import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerMainText: {
    marginLeft: 30,
    marginTop: 80,
  },
  mainText: {
    fontSize: 28,
    fontFamily: "Lexend_600SemiBold",
    color: "#333333"
  },
  subContainerText: {
    marginLeft: 30,
  },
  subText: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: "Lexend_400Regular",
    color: "#333333"
  },
  percent: {
    color: "#68A6DA",
  },
  sucessfulText: {
    color: "#0B6E4F",  
  },
  lateText: {
    color: "#721817",  
  },
  pendentText: {
    color: "#F6D664",  
  },
  containerEvent: {
    marginLeft: 30,
    marginTop: 30,
    marginBottom: 15,
  },
  textEvent: {
    fontSize: 24,
    fontFamily: "Lexend_400Regular",
    color: "#333333"
  },
  descriptionPill: {
    marginLeft: 30,
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  },
  subDescriptionPill: {
    marginLeft: 30,
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
    marginRight: 30,
    flexDirection: "row",
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
});

export default styles;
