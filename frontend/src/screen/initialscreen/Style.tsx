import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly"
       
    },

    container_image_text:{
        backgroundColor:"blue",
        height:400,
        width:350,
        borderRadius:20,
        display: "flex",
        alignItems:"center",
        justifyContent: "space-around"

    },

    container_image:{
        backgroundColor:"yellow",
        height:290,
        width:250
    },
    container_text:{
        backgroundColor:"purple",
        height:50,
        width:250
    },

    buttons_contaiener:{
        backgroundColor:"black",
        height:210,
        width:350,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        gap:20
    },
    buttons:{
        width:200
    },
    text_footer:{
        backgroundColor:"white",
        height:50,
        width:250
    }
});
