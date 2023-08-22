import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#191924",
    flex: 1,
    display: "flex",
    alignItems: "center",
    gap: 20,
  },

  imagem: {
    backgroundColor: "blue",
    width: 150,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  imagemText: {},

  tituloContainer: {

    width: 330,
    height: 100,
    display: "flex",
    gap:10,
  },

  tituloText: {
    color:"white"
  },

  tituloImput: {
    backgroundColor:"#808080",
    borderRadius:12,
    height:50,
    paddingLeft:15,
    color:"#191924",
    fontWeight:"bold",
    
  },

  categoriaContainer: {

    width: 330,
    height: 100,
    display: "flex",
    gap:10,
  },
  categoriaText: {
    color:"white"
  },
  categoriaRadio: {

   display:"flex",
   flexDirection:"row",
   justifyContent:"space-evenly"
  },

  textRaio:{
    color:"white"
  },

  TextAndRadio:{
    display:"flex",
    alignItems:"center"
  },

  descricaoContainer: {
    width: 330,
    height: 150,
    gap:10,
  },
  descricaoText: {
    color:"white"
  },
  descricaoImput: {
    backgroundColor:"#808080",
    height:120,
    borderRadius:12
  },

  botaoDoarContainer: {
    backgroundColor: "grey",
    width: 150,
    height: 150,
  },
});
