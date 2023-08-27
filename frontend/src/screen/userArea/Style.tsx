import { StyleSheet} from "react-native";
import { Button } from "react-native-paper";

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#191924",
        alignItems:"center"
     
        
    },
    container_son:{
        flex: .6,
        backgroundColor:"#7353ED",
        alignItems:"center",
        borderBottomLeftRadius:60,
        borderBottomRightRadius:60,
        width:"100%",
        justifyContent:"space-evenly",
        marginBottom:30
    },
    userImage:{
        width:120,
        height:120,
        borderRadius:100,
        borderWidth:2,
        borderColor:"#232231"
    },

    user_text_info:{
        fontWeight:"bold",
        letterSpacing:1
    },
   
    container_text_and_button:{
        backgroundColor:"orange",
        width:"100%",
        height:40,

    },
    buttonEdit:{
        width:200,
        marginTop:50
    },
    buttonLogout:{
        width:200,
    }
})