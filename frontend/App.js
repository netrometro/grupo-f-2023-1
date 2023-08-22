import Navegation from './src/routes';


//Aqui só colocaremos o contexto de navegação das rotas


// EXPLICAÇÃO PARA RONALD E ELISON  

/*
  Quando rodamos o app, vai vir direto para o App.js. 
  A função App vai retonar o  "Navegation"
  Dentro do "Navigation", teremos o contexto de navegação que estará exibindo o "StackComponent"
  Vai ser dentro da "StackComponent" que teremos as nossas rotas de navegação do tipo "Stack Navigator"
  Ou seja, iremos pular de uma página para outra usando a navegação Stack Navigator do "react-navigation"
*/

export default function App() {
  return <Navegation/>
  
}

