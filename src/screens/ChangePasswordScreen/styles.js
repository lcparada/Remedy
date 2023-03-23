import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainContainer: {
        marginTop: 116,
        marginLeft: 30,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    mainText: {
        fontSize: 28,
        fontFamily: "Lexend_700Bold",
        color: "#333333"
    },
    containerInputCurrentPassword: {
        marginTop: 45,
        marginLeft: 30,
        flexDirection: "row",
        alignItems: "center",
        width: 330,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#F5F7F9",
        justifyContent: "space-between",
        paddingRight: 15
    },
    inputCurrentPassword: {
        width: 290,
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: "Lexend_400Regular"
    },
    containerInputNewPassword: {
        marginLeft: 30,
        marginTop: 15,
        flexDirection: "row",
        alignItems: "center",
        width: 330,
        height: 60,
        borderRadius: 10,
        backgroundColor: "#F5F7F9",
    },
    containerButton: {
        marginTop: 70,
        marginLeft: 30
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
        fontSize: 18,
        fontFamily: "Lexend_700Bold",
        color: "white"
    }

})

export default styles