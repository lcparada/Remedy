import { StyleSheet } from "react-native";

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
    color: "#333333",
  },
  containerButtons: {
    flexDirection: "row",
    marginTop: 32,
    marginLeft: 20,
    columnGap: 23,
    marginBottom: 20,
  },
  textButton: {
    fontSize: 18,
    fontFamily: "Lexend_400Regular",
    alignItems: "center",
    justifyContent: "center",
  },
  selectTextButton: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    alignItems: "center",
    justifyContent: "center",
    color: "#68A6DA",
  },
  selectText: {
    fontSize: 18,
    fontFamily: "Lexend_600SemiBold",
    color: "#68A6DA",
  },
});

export default styles;
