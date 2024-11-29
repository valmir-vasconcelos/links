import { colors } from "@/src/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
        // paddingTop: 62
        paddingTop: 32
    },

    title: {
        color: colors.green[900],
        fontSize: 22
    },

    header: {
        paddingHorizontal: 24,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 32
    },

    logo: {
        height: 32,
        width: 38
    }

})