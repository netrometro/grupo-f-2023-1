import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"red",
        flex:1,
        display:"flex",
        alignItems:"center",
        justifyContent: "space-evenly"
       
    },

    container_image_text:{
        backgroundColor:"blue",
        height:500,
        width:350,
        borderRadius:20,
        display: "flex",
        alignItems:"center",
        justifyContent: "space-around"

    },

    container_image:{
        backgroundColor:"yellow",
        height:370,
        width:250
    },
    container_text:{
        backgroundColor:"purple",
        height:100,
        width:250
    },

    buttons_contaiener:{
        backgroundColor:"black",
        height:200,
        width:350,
    },

    text_footer:{
        backgroundColor:"white",
        height:80,
        width:250
    }
});
