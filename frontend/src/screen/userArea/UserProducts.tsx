import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios';
import { MEU_IP } from '../../config';
import { getAuth } from 'firebase/auth';


const {width} = Dimensions.get("window")

export const UserProducts = () => {

  const [data, setData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  

  // Função para buscar dados via Axios
  const fetchData = async () => {
    try {
      const response = await axios.get( `http://192.168.0.100:3000/api/produto/user/${user.uid}`);
      setData(response.data); // Atualize o estado com os novos dados
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };


   // Execute a função de busca de dados quando o componente for montado
   useEffect(() => {
    fetchData();
  }, []); // O segundo argumento vazio assegura que a chamada é feita apenas uma vez, no montagem do componente.



  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.titulo}</Text> 
      <TouchableOpacity
      onPress={()=>{}} style={styles.delete}>
      <Feather name="trash-2" size={24} color="#D65353" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(data) => data.id}
      horizontal
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      snapToAlignment='start'
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      snapToOffsets={[...Array(data.length)].map((x,i)=> i*(width*0.8-40) + (i-1)*40)}


    />
  );
};

const styles = StyleSheet.create({
    container:{
        width:width*0.8 - 20,
        height:width/2.6,
        backgroundColor:"#232231",
        marginHorizontal:10,
        borderRadius:12,
        borderWidth:1,
        borderColor:"#7353ED",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    delete:{
        width:50,
        height:50,

        alignSelf:"center",
        borderRadius:360,
        marginRight:10,
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
  });