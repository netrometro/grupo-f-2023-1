import { Text, View, TouchableOpacity } from 'react-native';
import estilo from "./styles";
import React from 'react';
// import deletarDadoDoServico from "../../services/deletarDadoDoServico";
export function Produto({ nome, id }) { // Certifique-se de ter o id disponível como prop
    // const handleDeletarPress = async () => {
    //     try {
    //         await deletarDadoDoServico(id); // Chame a função do serviço para deletar o dado pelo id
    //         // Atualize a interface ou faça qualquer outra ação necessária após a exclusão bem-sucedida
    //     } catch (error) {
    //         console.error('Erro ao deletar o dado:', error);
    //     }

    return (
        <View style={estilo.produto}>
            <View style={estilo.produtoTras}>
            </View>
            <Text style={estilo.nome}>{nome}</Text>
            <TouchableOpacity style={estilo.botaoDeletar}>
            {/* onPress={handleDeletarPress} */}
                <Text style={estilo.botaoDeletarText}>Concluido</Text>
            </TouchableOpacity>
        </View>
    );
}
