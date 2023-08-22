import Fastify from "fastify";
import userRoutes from "./modules/usuario/routes/usuario.routes";
import categoriesRoutes from "./modules/categoria/routes/category.routes";
import productRoutes from "./modules/produtos/routes/produtos.routes";
import cors from "@fastify/cors"

const server = Fastify()

// Caso a gente queira testar se o servidor está rodando.
server.get('/healthcheck', async()=>{
    return {status: "OK"}
})

async function main(){

    //REGISTRO DAS ROTAS:

    //CORS
    server.register(cors, {origin: true})
    
    //Registro da criação do usuário:
    server.register(userRoutes, {prefix: 'api/usuario'}) //-> prefixo da rota já definido aqui
    server.register(categoriesRoutes, {prefix: 'api/categoria'}) 
    server.register(productRoutes, {prefix: 'api/produto'}) 


    //Registro da criação dos produtos: 
    

    try {
        await server.listen(3000, '0.0.0.0')
        console.log("Servidor iniciado em http://localhost:3000")
        
    } catch (error) {
        console.log("Aconteceu um erro: " +error)
        process.exit(1)
    }
}

main()