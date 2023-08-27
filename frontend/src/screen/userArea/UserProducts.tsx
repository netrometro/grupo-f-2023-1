import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions  } from 'react-native';


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
    </View>
  );

  return (
    <FlatList
      style={styles.fat}
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
        backgroundColor:"red",
        marginHorizontal:10,
        borderRadius:12,
        padding:20
    },
    fat:{
        
     
        
    }
  });