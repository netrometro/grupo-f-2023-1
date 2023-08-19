import {z} from 'zod'

//Criar produtos
const createProductSchema = z.object({
    titulo: z.string({
        required_error: 'O título é obrigatório',
        invalid_type_error: 'O tipo -titulo- tem que ser uma string' //-> Caso você passe um tipo diferente do que o esperado
    }),
    descricao: z.string({
        required_error: 'A descrição é obrigatório',
        invalid_type_error: 'O tipo -descricao- tem que ser uma string' 
    }),

    categoriaId:z.number({
        required_error: 'A categoriaId é obrigatório',
        invalid_type_error: 'O tipo -categoriaId- tem que ser um Inteiro'
    })
})

export type CreateProductImput = z.infer<typeof createProductSchema>
