import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerPressable: {
        flex: 1,
    },
    containerMainText: {
        marginTop: 144,
        marginLeft: 30
    },
    mainText: {
        fontSize: 35,
        fontFamily: "Lexend_700Bold",
    },
    containerSubText: {
        marginTop: 15,
        marginLeft: 30
    },
    subText: {
        fontSize: 15,
        fontFamily: "Lexend_300Light",
        color: "#99A0A8"
    },
    containerInputEmail: {
        marginTop: 45,
        marginLeft: 30,
        height: 60,
        width: 330,
        borderRadius: 10,
        backgroundColor: "#F5F7F9",
        flexDirection: "row",
        alignItems: "center"
    },
    inputEmail: {
        fontSize: 16,
        fontFamily: "Lexend_400Regular",
        paddingLeft: 20,
        width: 290
    },
    containerButton: {
        marginTop: 15,
        marginLeft: 30,
    },
    button: {
        width: 330,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#68A6DA",
        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        fontSize: 16,
        fontFamily: "Lexend_700Bold",
        color: "white"
    },
    containerLogo: {
    width: 330,
    marginLeft: 30,
    alignItems:"center",
    marginTop: 185
    },
})

export default styles