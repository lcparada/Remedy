import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    marginTop: 80,
    marginLeft: 30,
    columnGap: 5,
  },
  textHeader: {
    fontFamily: "Lexend_700Bold",
    fontSize: 22,
    color: "#68A6DA",
  },
  body: {
    marginTop: 60,
    marginLeft: 30,
  },
  containerInput: {
    rowGap: 10,
  },
  textInput: {
    fontFamily: "Lexend_400Regular",
    fontSize: 16,
    color: "#929292",
  },
  input: {
    width: 330,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#F5F7F9",
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Lexend_400Regular",
  },
  containerButton: {
    marginTop: 30,
  },
  button: {
    width: 330,
    height: 60,
    backgroundColor: "#68A6DA",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  textButton: {
    fontFamily: "Lexend_700Bold",
    fontSize: 16,
    color: "white",
  },
});

export default styles;
