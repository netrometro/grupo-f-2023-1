import Fastify from "fastify";
import userRoutes from "./modules/usuario/routes/usuario.routes";

const server = Fastify()

server.get('/healthcheck', async()=>{
    return {status: "OK"}
})

async function main(){

    //Gegistrar as rotas:

    //Registro da criação do usuário:
    server.register(userRoutes, {prefix: 'api/usuario'}) //-> prefixo da rota já definido aqui


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