import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';
import { getAuth } from 'firebase/auth';

const { width } = Dimensions.get("window");

export const UserProducts = () => {

  const [data, setData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://192.168.0.100:3000/api/produto/user/${user.uid}`);
      setData(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    setInterval(()=>{
      fetchData();
    },1000)
  }, []);

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://192.168.0.100:3000/api/produto/${itemId}`);
      // After successful deletion, you can update the state to re-render the list
      fetchData();
    } catch (error) {
      console.error('Erro ao deletar item:', error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <View style={styles.titulo_descricao}>
        <Text style={{ marginTop: 10, color: "white", fontWeight: "bold" }}>{item.titulo}</Text>
        <Text style={{ marginTop: 30, color: "white", marginLeft: 10 }}>{item.descricao}</Text>
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity
          onPress={() => deleteItem(item.id)} 
          style={styles.button}>
          <Feather name="trash-2" size={24} color="#D65353" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { }} style={styles.button}>
          <Feather name="edit-3" size={24} color="#7353ED" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()} // Use toString() to ensure the key is a string
      horizontal
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      snapToAlignment='start'
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      snapToOffsets={[...Array(data.length)].map((x, i) => i * (width * 0.8 - 40) + (i - 1) * 40)}
    />
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
    justifyContent: "space-between"
  },
  button: {
    width: 50,
    height: 50,
    alignSelf: "center",
    borderRadius: 360,
    marginRight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  titulo_descricao: {
    width: 180,
    display: "flex",
    alignItems: "center",
  },
  buttons_container: {
    justifyContent: "center",
    gap: 10
  }
});
