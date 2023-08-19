import {z} from 'zod'


//Talvez não vai ser necessário usar essa função
const createCategorySchema = z.object({
    categoriaNome: z.string({
        required_error: 'O categoriaNome é obrigatório',
        invalid_type_error: 'O tipo -categoriaNome- tem que ser uma string'
    }),
    id: z.number({
        required_error: 'O id é obrigatório',
        invalid_type_error: 'O tipo -id- tem que ser uma string'
    })
})

export type CreateCategoryImput = z.infer<typeof createCategorySchema>
