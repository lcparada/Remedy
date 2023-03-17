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
  registerForm: {
    width: 330,
    height: 280,
    elevation: 1,
    marginTop: 65,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 56
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  inputUser : {
    fontFamily: "Lexend_300Light",
    width: 220
  },
  containerEmail: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 45
  },
  inputEmail: {
    fontFamily: "Lexend_300Light",
    width: 220
  },
  containerPassword: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 45
  },
  inputPassword: {
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
    fontSize: 15
    
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