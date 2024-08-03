import "./index.css";
import "./App.css";
import ReactDOM from "react-dom";
import React from "react";
import Primeiro from "./componentes/basicos/Primeiro";
import Segundo from "./componentes/basicos/segundo";
import A from "./componentes/medios/MediosInterno/teste";
import B from "./componentes/medios/lowercase";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMembros from "./componentes/basicos/FamiliaMembros";
import Alunos from "./componentes/medios/Alunos";
import Produtos from './componentes/medios/Produtos'
import PArOuImpar from "./componentes/condicionais/PArOuImpar";
import UsuarioNome from "./componentes/condicionais/UsuarioNome";

export default function App() {
  ReactDOM.render(
    <div id="id-principal">
      <div className="exs">
        <Card titulo="Primeiro Ex">{<Primeiro></Primeiro>}</Card>

        <Card titulo="Segundo Ex" cor="">
          <Segundo testedepropriedadedentrodoreact="teste de porpriedades através dos import e export(deu certo mesmo)"></Segundo>
        </Card>

        <Card titulo="Teste de renderização">
          <A></A>
        </Card>
        <Card titulo="Teste de Case">
          <B></B>
        </Card>
        <Card titulo="Número aleatório">
          <Aleatorio min={1} max={10}></Aleatorio>
        </Card>
        <Card titulo='Exercicio familia'>
          <Familia sobrenome='Estrela'>

            <FamiliaMembros nome='Rodrigo' ></FamiliaMembros>
            <FamiliaMembros nome='Celso' ></FamiliaMembros>
            <FamiliaMembros nome='Danilo' ></FamiliaMembros>
            <FamiliaMembros nome='Felipe' ></FamiliaMembros>
          </Familia>

        </Card>
        <Card titulo='Lista de alunos'>
         <Alunos></Alunos>
        </Card>
        <Card titulo='Exercício dos produtos'>
          <Produtos></Produtos>
        </Card>
        <Card titulo='Par ou Impar'>
          <PArOuImpar numero={11}></PArOuImpar>
        </Card>
        <Card titulo='Bem Vindo Usuario'>
          <UsuarioNome nome='Rodrigo'></UsuarioNome>
          <UsuarioNome ></UsuarioNome>
        </Card>

      </div>
    </div>,
    document.querySelector("#root")
  );
}
