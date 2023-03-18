import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerLogo: {
        width: 130,
        height: 130,
        backgroundColor: "#68A6DA",
        borderRadius: 20,
        alignItems: "center",
        justifyContent:"center"
    },
    containerMainText: {
        marginTop: 60,
    },
    mainText: {
        fontSize: 25,
        fontFamily: "Lexend_700Bold"
    },
    containerSubText: {
        marginTop: 10,
        
    },
    subText: {
        fontSize: 15,
        fontFamily: "Lexend_400Regular",
        color: "#99A0A8",
        paddingHorizontal: 12,
    },
    containerButton: {
        marginTop: 20
    },
    button: {
        width: 330,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#68A6DA",
        justifyContent: "center",
        alignItems: "center"
    },
    textButton: {
        fontSize: 20,
        fontFamily: "Lexend_700Bold",
        color: "white"
    },
    containerResend: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    textResend: {
        fontSize: 15,
        fontFamily: "Lexend_400Regular",
        color: "#99A0A8"
    },
    textButtonResend: {
        marginLeft: 5,
        fontSize: 15,
        fontFamily: "Lexend_700Bold",
        color: "#68A6DA"

    }
})

export default styles