import { StyleSheet } from "react-native";

export default StyleSheet.create({
   container:{
    backgroundColor:"#191924",
    flex:1,
    display:"flex",
    alignItems:"center",
   },
   container_image:{
    backgroundColor:"#232231",
    height:280,
    width:280,
    marginTop:20,
    borderRadius:20,
    display:"flex",
    justifyContent:"flex-end",
    alignItems:"center",
   },
   image:{
    width:208,
    height:225,
  
   },
   text_and_button:{
      height:350,
      width:280,
      display:"flex",
      marginTop:20,
      justifyContent:"space-around",
      alignItems:"center"
   },
   input:{
      backgroundColor:"#232231",
      width:280,
      height:50,
      borderRadius:10,
      borderWidth:1,
      borderColor:"#7353ED",
      paddingLeft:15,
      color:"#808080",
      
 },

   text_footer_container:{
      marginTop:30,
      display:"flex",
      alignItems:"center"
   }
});
