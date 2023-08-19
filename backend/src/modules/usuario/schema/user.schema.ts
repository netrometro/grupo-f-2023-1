//Aqui vou especificar o que eu quero que seja incluido quando for cadastrar o usuário
//Vai ser usado para tipificar o 'data' passado como parâmetro para a função 'createUser' do user.respository

import { type } from "os";
import { z } from "zod";


const createUserSchema = z.object({
    //Se eu adicionar mais atributos na tabela do prisma, colocar aqui também o que deverá ser passado.
    nome: z.string({
        required_error: 'O nome do usuário é obrigatório',
        invalid_type_error: 'O tipo -nome- tem que ser uma string' //-> Caso você passe um tipo diferente do que o esperado
    })

    //Outras validações aqui:  


})

export type createUserSchema = z.infer<typeof createUserSchema> //-> será usado como o nosso 'tipo'