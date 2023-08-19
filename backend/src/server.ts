import Fastify from "fastify";

const server = Fastify()

server.get('/healthcheck', async()=>{
    return {status: "OK"}
})

async function main(){
    try {
        await server.listen(3000, '0.0.0.0')
        console.log("Servidor iniciado em http://localhost:3000")
        
    } catch (error) {
        console.log("Aconteceu um erro: " +error)
        process.exit(1)
    }
}

main()