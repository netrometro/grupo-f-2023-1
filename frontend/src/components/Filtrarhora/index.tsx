import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import filtrarhoras from "../../services/filtrarhoras/filtrarhoras";
import { Feather } from '@expo/vector-icons';

const options = [
  { id: 1, label: 'horas' },
  

];

function ProductListScreen({ updateFilteredProducts }) {
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionPress = (id: number) => {
    setSelectedOption(id);
  };

  const handleOkPress = async () => {
    if (selectedOption !== null) {
      try {
        const selectedId = options.find(option => option.id === selectedOption)?.id;
        if (selectedId) {
          const produtos = await filtrarProdutos(selectedId);
          setFilteredProducts(produtos);
          updateFilteredProducts(produtos);
        }
      } catch (error) {
        console.error('Erro ao filtrar produtos:', error);
      }
    }

    toggleModal();
  };

  const handleClearFilters = () => {
    setFilteredProducts([]);
    updateFilteredProducts([]); // Atualiza a lista de produtos na tela Home
    setSelectedOption(null);
    toggleModal();
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={toggleModal} style={styles.filterButton}>
        <Feather name="filter" size={20} color="#cecece" style={styles.filterIcon} />
      </TouchableOpacity>

      <Modal visible={isModalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeaderText}>Filtrar por:</Text>
            {options.map(option => (
              <TouchableOpacity
                key={option.id}
                onPress={() => handleOptionPress(option.id)}
              >
                <View style={[styles.optionContainer, selectedOption === option.id && styles.selectedOption]}>
                  <Text style={[styles.optionText, selectedOption === option.id && styles.selectedOptionText]}>{option.label}</Text>
                </View>
              </TouchableOpacity>
            ))}
            <Button title="Ok" onPress={handleOkPress} />
            <Button title="Cancelar" onPress={toggleModal} />
            <Button title="Limpar Filtros" onPress={handleClearFilters} />

          </View>
        </View>
      </Modal>


    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#7353ED', // Cor desejada
    width: '90%',
    maxHeight: '50%',
    padding: 20,
    borderRadius: 10,
  },
  modalHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white', // Cor do texto do cabeçalho
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'white',
  },
  selectedOption: {
    backgroundColor: 'white',
  },
  optionText: {
    color: 'white', // Cor do texto das opções
  },
  selectedOptionText: {
    color: '#7353ED',
  },
  filterButton: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 999,
  },
  filterIcon: {
    marginRight: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProductListScreen;
