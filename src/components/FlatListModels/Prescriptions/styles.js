import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  prescriptionScreen: {
    marginLeft: 30,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  prescriptionTextScreen: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  },
  prescriptionSubTextScreen: {
    fontSize: 14,
    fontFamily: "Lexend_400Regular",
    color: "#333333",
  },
  statusPrescription: {
    marginRight: 32,
    flexDirection: "row",
    columnGap: 10,
  },
  statusPrescriptionTextProgress: {
    fontSize: 13,
    fontFamily: "Lexend_600SemiBold",
    color: "#F6D664",
  },
  statusPrescriptionTextFinished: {
    fontSize: 13,
    fontFamily: "Lexend_600SemiBold",
    color: "#0B6E4F",
  },
  statusPrescriptionTextAbandoned: {
    fontSize: 13,
    fontFamily: "Lexend_600SemiBold",
    color: "#721817",
  },
  container: {
    flex: 1,
  },
  header: {
    marginTop: 80,
    marginLeft: 30,
  },
  textHeader: {
    fontFamily: "Lexend_700Bold",
    fontSize: 22,
    color: "#68A6DA",
  },
  body: {
    marginTop: 20,
    marginLeft: 30,
  },
  containerTextBody: {
    marginTop: 20,
  },
  textBody: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "#333333",
  },
  subTextBody: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#C8C8C8",
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    right: 10,
  },
  textOptions: {
    fontFamily: "Lexend_400Regular",
    fontSize: 14,
    color: "#C8C8C8",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#68A6DA",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontFamily: "Lexend_700Bold",
    fontSize: 20,
    color: "white",
  },
});

export default styles;
