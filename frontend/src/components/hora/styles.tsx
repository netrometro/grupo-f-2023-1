import { StyleSheet} from "react-native";

export default StyleSheet.create({
    produto:{
        backgroundColor: '#808080',
        height: 160,
        width: 140,
        margin: 21,
        borderRadius: 18,
        alignSelf: 'center',
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
    botaoDeletar: {
        width: 80,
        height: 30,
        backgroundColor: '#3d692c',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
      },
      botaoDeletarText: {
        color: 'white',
      },
})