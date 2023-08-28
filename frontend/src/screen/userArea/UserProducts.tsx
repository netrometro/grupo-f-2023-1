import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity  } from 'react-native';
import { Feather } from '@expo/vector-icons'; 




const {width} = Dimensions.get("window")

export const UserProducts = () => {



  // Seus dados de exemplo
  const data = [
    { key: '1', text: 'Item 1' },
    { key: '2', text: 'Item 2' },
    { key: '3', text: 'Item 3' },
    // Adicione mais itens conforme necessário
  ];

  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text>{item.text}</Text> 
      <TouchableOpacity
      onPress={()=>{}} style={styles.delete}>
      <Feather name="trash-2" size={24} color="#D65353" />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.key}
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