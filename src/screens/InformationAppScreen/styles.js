import { StyleSheet } from "react-native";



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerMainText: {
        marginTop: 80,
        marginLeft: 30,
        width: 280,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10
    },
    mainText: {
        fontSize: 24,
        fontFamily: "Lexend_700Bold",
        color: "#333333"
    },
    containerQuestionText: {
        marginTop: 40,
        marginLeft: 30
    },
    questionText: {
        fontSize: 18,
        fontFamily: "Lexend_600SemiBold",
        color: "#68A6DA"
    },
    descriptionText: {
        marginTop: 12,
        color: "#929292",
        fontSize: 14,
        fontFamily: "Lexend_400Regular",
        width: 340
    }

})

export default styles