import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        marginBottom: 150
    },
    containerMainText: {
        marginTop: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    mainText : {
        fontSize: 24,
        fontFamily: "Lexend_400Regular",
        color: "#333333"
    },
    containerIcon: {
        marginTop: 55
    },
    containerUsername: {
        alignItems: "center",
        justifyContent: "center",
    },
    username: {
        fontSize: 24,
        fontFamily: "Lexend_500Medium",
        color: "#333333"
    },
    containerEmail: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        columnGap: 2,
        marginTop: 5
    },
    textEmail : {
        fontSize: 14,
        fontFamily: "Lexend_400Regular",
        color: "#B8B8C4"
    },
    options: {
        right: 54
        
    },
    circle: {
        width: 45,
        height: 45,
        backgroundColor: "#A0CAED",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    textConfig: {
        fontSize: 18,
        fontFamily: "Lexend_400Regular",
        color: "#333333"
    },
    containerEditProfile: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 50,
        
    },
    containerResetPassword: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 25,
        
    },
    containerChangeLocation: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 25,
    },
    containerInformationApp: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 25,
    },
    containerLogOut: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: 10,
        marginTop: 25,
    },
    circleLogOut: {
        width: 45,
        height: 45,
        backgroundColor: "#F47B7B",
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
})

export default styles