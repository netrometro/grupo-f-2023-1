import { StyleSheet} from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#191924",
        display:"flex",
        alignItems:"center",
        gap:10
    },
    titulo:{
        marginLeft:25,
        color: 'white',
        fontSize: 18,

        marginRight:20,
        textAlignVertical:"center"
    },
    filtroTitulo:{

        height:50,
        width:350,
        display:"flex",
        flexDirection:"row",
        gap:55
    },
    input:{
        backgroundColor: 'white',
        borderRadius: 4,
        paddingHorizontal: 8,
        marginBottom: 12,
    }
})