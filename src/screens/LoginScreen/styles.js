import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
  },
  containerError: {
    marginBottom: 10,
    alignItems: "center"
  },
  error: {
    fontSize: 12,
    fontFamily: "Lexend_400Regular",
    color: "red"
  },
  input: {
    width: 265,
    height: 40,
    fontFamily: "Lexend_300Light"
  },
  containerInput: {
    flexDirection: "column",
    rowGap: 20,
  },
  inputUser: {
    flexDirection: "row",
    alignItems: "center",
    width: 330,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#F5F7F9",
    paddingLeft: 20,
    justifyContent: "space-between",
    paddingRight: 20,
    
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#68A6DA",
    width: 330,
    height: 60,
    marginTop: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
  },
  forgotPassword: {
    marginTop: 40,
    alignItems: "center"
  },
  textForgotPassword: {
    color: "#68A6DA",
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
  },
  register: {
    alignItems: "center",
    justifyContent: "center",
    top: 160
  },
  textRegister: {
    color: "#68A6DA",
    fontSize: 16,
    fontFamily: "Lexend_700Bold",
    alignItems: "center"
  },
  subTextRegister: {
    alignItems: "center",
    fontSize: 14,
    fontFamily: "Lexend_300Light",
    color: "#333333"
  }
});

export default styles;
