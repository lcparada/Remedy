import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 30,
  },

  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68A6DA",
    right: 12,
    bottom: 1,
    width: 64,
    height: 64,
    borderRadius: 40,
    elevation: 3,
    flexDirection: "row",
  },

  subButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68A6DA",
    width: 48,
    height: 48,
    marginBottom: 10,
    marginRight: 10,
  },

  nameButton: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#68A6DA",
    right: 20,
    bottom: 1,
    width: 64,
    height: 64,
    borderRadius: 40,
    elevation: 3,
    flexDirection: "row",
  },

  subNameButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 3,
    right: 60,
    height: 45,

    marginRight: -10,
    paddingRight: 50,
    paddingLeft: 20,
  
  },
});

export default styles;
