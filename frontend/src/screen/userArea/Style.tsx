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
    userPhoto:{
       width:100,
       height:100,
       borderRadius:360,
       backgroundColor:"#191924",
       display:"flex",
       alignItems:"center",
       justifyContent:"center",
       marginTop:10
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
  
    buttonLogout:{
        width:130,
      
    },
    button_container:{
        display:"flex",
        flexDirection:"row",
        gap:50
    }
})