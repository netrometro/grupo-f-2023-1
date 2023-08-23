import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#191924",
        alignItems: "center",
        paddingTop: 20,
        gap: 10
    },
    titulo:{
        color: 'white',
        fontSize: 22,
    },
    input: {
      width: 250,
      height: 44,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      borderRadius: 15,
      backgroundColor: '#e8e8e8'
    },
    botao:{
        backgroundColor: '#7353ED',
        borderRadius: 15,
        padding: 10,
        color: 'white',
        fontSize: 18
    }
})