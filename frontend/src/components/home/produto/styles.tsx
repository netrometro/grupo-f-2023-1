import { StyleSheet} from "react-native";

export default StyleSheet.create({
    produto:{
        backgroundColor: '#7353ED',
        height: 180,
        width: 140,
        margin: 21,
        borderRadius: 18,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
    },
    produtoTras:{
        backgroundColor: '#232231',
        height: 110,
        width: 140,
        borderRadius: 18,
        alignSelf: 'center',
        flexDirection: "column-reverse"
    },
    nome:{
        color: 'white',
        textAlign: "center"
    },

    button: {
        width: 50,
        height: 50,
        borderRadius: 360,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
})