import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import axios from "axios";
import { getAuth } from "firebase/auth";
import Estilo from "../donateItens/Styles";
import { Button, RadioButton } from "react-native-paper";
import { MEU_IP } from "../../config";

const { width } = Dimensions.get("window");

export const UserProducts = () => {
  const [data, setData] = useState([]);
  const[modalVisible, setModalVisible] = useState(false)
  const auth = getAuth();
  const user = auth.currentUser;


  const[titulo, setTitulo] = useState('')
  const[id, setId] = useState('')
  const[descricao, setDescricao] = useState('')
  const[categoria, setCategoria] = useState('')


  const dados = {
    titulo: titulo,
    descricao: descricao,
    categoriaId: Number(categoria)
  };


  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${MEU_IP}/api/produto/user/${user.uid}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    setInterval(() => {
      fetchData();
    }, 1000);
  }, []);

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${MEU_IP}/api/produto/${itemId}`);
      // After successful deletion, you can update the state to re-render the list
      fetchData();
    } catch (error) {
      console.error("Erro ao deletar item:", error);
    }
  };

  //Aqui abriá um modal para editar as coisas:

  async function modalA(id, titulo, descricao, categoria) {
    setId(id);
    setTitulo(titulo);
    setDescricao(descricao);
  
      setModalVisible(true);
  }
  
  async function updateProducts(id, dados) {
    try {
      // Espere pela conclusão da solicitação HTTP
      await axios.put(`${MEU_IP}/api/produto/${id}`, dados);
      setId("")
      setModalVisible(false);
      // Após a atualização bem-sucedida, você pode atualizar o estado ou fazer outras ações, se necessário.
    } catch (error) {
      console.log("Erro ao atualizar os produtos: " + error);
    }
  }

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.titulo_descricao}>
        <Text style={{ marginTop: 10, color: "white", fontWeight: "bold" }}>
          {item.titulo}
        </Text>
        <Text style={{ marginTop: 30, color: "white", marginLeft: 10 }}>
          {item.descricao}
        </Text>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity
          onPress={() => deleteItem(item.id)}
          style={styles.button}
        >
          <Feather name="trash-2" size={24} color="#D65353" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          modalA(item.id, item.titulo, item.descricao, item.categoriaId)
          
          }} style={styles.button}>
          <Feather name="edit-3" size={24} color="#7353ED" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>

      {
        modalVisible ?  (
          <Modal>
          <View style={Estilo.container}>
            <View style={Estilo.tituloContainer}>
              <Text style={Estilo.tituloText}>Digite um novo título:</Text>
              <TextInput
                selectionColor={"#7353ED"}
                style={Estilo.tituloImput}
                value={titulo}
                onChangeText={setTitulo}
              />
            </View>
  
            <View style={Estilo.categoriaContainer}>
              <Text style={Estilo.categoriaText}>Escolha uma nova categoria:</Text>
              <View style={Estilo.categoriaRadio}>
                <View style={Estilo.TextAndRadio}>
                  <RadioButton 
                  value="1" 
                  status={categoria=== "1" ? "checked" : "unchecked"}
                  color={categoria === "checked" ? "#808080" : "#7353ED"}
                  onPress={() => setCategoria("1")}
                  
                  />
              
                  <Text style={Estilo.textRaio}>Roupas</Text>
                </View>
                <View style={Estilo.TextAndRadio}>
                  <RadioButton 
                  value="2"
                  status={categoria=== "2" ? "checked" : "unchecked"}
                  color={categoria === "checked" ? "#808080" : "#7353ED"}
                  onPress={() => setCategoria("2")}
                  />
                  <Text style={Estilo.textRaio}>Alimentos</Text>
                </View>
                <View style={Estilo.TextAndRadio}>
                  <RadioButton 
                  value="3" 
                  status={categoria=== "3" ? "checked" : "unchecked"}
                  color={categoria === "checked" ? "#808080" : "#7353ED"}
                  onPress={() => setCategoria("3")}
                  
                  />
                  <Text style={Estilo.textRaio}>Brinquedos</Text>
                </View>
                <View style={Estilo.TextAndRadio}>
                  <RadioButton 
                  value="4" 
                  status={categoria=== "4" ? "checked" : "unchecked"}
                  color={categoria === "checked" ? "#808080" : "#7353ED"}
                  onPress={() => setCategoria("4")}
                  
                  />
                  <Text style={Estilo.textRaio}>Livros</Text>
                </View>
  
                <View style={Estilo.TextAndRadio}>
                  <RadioButton 
                  value="5"
                  status={categoria=== "5" ? "checked" : "unchecked"}
                  color={categoria === "checked" ? "#808080" : "#7353ED"}
                  onPress={() => setCategoria("5")}
                  
                  />
                  <Text style={Estilo.textRaio}>Transporte</Text>
                </View>
              </View>
            </View>
  
            <View style={Estilo.descricaoContainer}>
              <Text style={Estilo.descricaoText}>Descreva uma nova descrição:</Text>
              <TextInput
                selectionColor={"#7353ED"}
                style={Estilo.descricaoImput}
                value={descricao}
                onChangeText={setDescricao}
              />
            </View>
  
            <Button style={Estilo.botaoDoar} mode="contained" onPress={()=>{updateProducts(id,dados)}}>
              Atualizar
            </Button>
          </View>
        </Modal>
  

        ): null
      }
      

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()} // Use toString() to ensure the key is a string
        horizontal
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        snapToOffsets={[...Array(data.length)].map(
          (x, i) => i * (width * 0.8 - 40) + (i - 1) * 40
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.8 - 20,
    height: width / 2.6,
    backgroundColor: "#232231",
    marginHorizontal: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#7353ED",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 360,
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo_descricao: {
    width: 180,
    display: "flex",
    alignItems: "center",
  },
  buttons_container: {
    justifyContent: "center",
    gap: 10,
  },
});
