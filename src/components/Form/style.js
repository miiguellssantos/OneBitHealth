import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext:{
        flex:1,
        marginTop:30,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30
    },
    form:{
        width:"100%",
    },
    formLabel: {
        fontSize: 18,
        paddingLeft: 20, 
    },
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },
    buttonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#fff"
    },
    errorMessage: {
        fontSize:12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },
    scrollView: {
        width: "100%",
        
    }
})

export default styles