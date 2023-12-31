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
    marginTop:30,
    backgroundColor: "#232231",
    width: 180,
    height: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius:30,
    borderColor:"#7353ED",
    borderWidth: .5
    
  },
  imagemText: {
    color:"#808080"
  },

  tituloContainer: {
    marginTop:50,
    width: 330,
    height: 100,
    display: "flex",
    gap:10,
  },

  tituloText: {
    color:"white"
  },

  tituloImput: {
    backgroundColor:"#232231",
    borderRadius:12,
    height:50,
    paddingLeft:15,
    color:"#808080",
    fontWeight:"bold",
    borderColor:"#7353ED",
    borderWidth: .5,
    
    
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
    backgroundColor:"#232231",
    height:120,
    borderRadius:12,
    textAlignVertical:"top",
    padding:15,
    color:"#808080",
    fontWeight:"bold",
    borderColor:"#7353ED",
    borderWidth: .5
  },


  botaoDoar:{
    marginTop:20,
    backgroundColor:"#7353ED",
    width:250,
    height:45,
  },

  distanciaContainer: {
    marginTop: 20,
  },

  distanciaText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  distanciaTextt: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#fff",
  },

  distanciaInput: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    color: "#fff",
  },
  errorText:{
    color: 'red'
  }
});
