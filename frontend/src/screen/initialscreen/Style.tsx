import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:"#191924",
        flex:1,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-evenly"
       
    },

    container_image_text:{
        backgroundColor:"#232231",
        height:450,
        width:350,
        borderRadius:20,
        display: "flex",
        alignItems:"center",
        justifyContent: "space-around",
        marginTop:30

    },

    container_image:{
        height:330,
        width:300,
        display:"flex",
        alignItems:"center"
    },

    image:{
        width:300,
        height:330,
        marginLeft:20
    },

    image_mais:{
        width: 58,
        height:50
    },
    container_text:{
        height:60,
        width:250,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    },

    buttons_contaiener:{
        height:210,
        width:350,
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        gap:20
    },
    buttons:{
        width:200,
 
    },
    
});
