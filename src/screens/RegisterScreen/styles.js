import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  pressableContainer: {
    alignItems: "center"
  },
  logo: {
    marginTop: 60
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 300,
    height: 60,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 120,
  },
  inputUser : {
    fontFamily: "Lexend_300Light",
    width: 220,
  },
  containerEmail: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 300,
    height: 60,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    padding: 20,
    marginTop: 20
  },
  inputEmail: {
    fontFamily: "Lexend_300Light",
    width: 220,
  },
  containerPassword: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 300,
    height: 60,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20
  },
  inputPassword: {
    fontFamily: "Lexend_300Light",
    width: 220
  },
  containerRepassword: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    width: 300,
    height: 60,
    backgroundColor: "#F5F7F9",
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 20
  },
  inputRepassword: {
    fontFamily: "Lexend_300Light",
    width: 220
  },
  containerButton: {
    marginTop: 40,
  },
  button:{
    width: 130,
    height: 50,
    backgroundColor: "#68A6DA",
    borderRadius: 25,
    alignItems: "center",
    justifyContent:"center"
  },
  containerAlreadyAccount: {
    marginTop:20,
    flexDirection: "row"

  },
  textAlreadyAccount: {
    alignItems:"center",
    justifyContent: "center",
    fontFamily: "Lexend_300Light",
    fontSize: 15,
    color: "#333333"
  },
  buttonAlreadyAccount : {
    alignItems:"center",
    justifyContent: "center",
  },
  textButtonAlreadyAccount: {
    fontSize: 15,
    fontFamily: "Lexend_700Bold",
    color: "#68A6DA"
  }

})

export default styles