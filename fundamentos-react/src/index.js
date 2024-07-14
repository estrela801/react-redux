import './index.css'
import ReactDOM from'react-dom'
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import Segundo from './componentes/basicos/segundo'
import A from './componentes/medios/MediosInterno/teste'
import B from './componentes/medios/lowercase'
ReactDOM.render(
    <div  id="id-principal">
        <Primeiro></Primeiro>
        <Segundo testedepropriedadedentrodoreact= 'teste de porpriedades através dos import e export(deu certo mesmo)'></Segundo>
        <A></A>
        <B></B>
    </div>
    , document.querySelector('#root'))