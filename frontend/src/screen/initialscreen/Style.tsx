import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        display:"flex",
        alignItems:"center",
       
    },

    container_image_text:{
        backgroundColor:"blue",
        height:500,
        width:350,
        marginTop:20,
        borderRadius:20,
        display: "flex",
        alignItems:"center",
        justifyContent: "space-around"

    },

    container_image:{
        backgroundColor:"yellow",
        height:320,
        width:250
    },
    container_text:{
        backgroundColor:"purple",
        height:150,
        width:250
    }
});
