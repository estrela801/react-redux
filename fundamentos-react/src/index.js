import './index.css'
import ReactDOM from'react-dom'
import React from 'react'
import Primeiro from './componentes/basicos/Primeiro'
import Segundo from './componentes/basicos/segundo'
import A from './componentes/medios/MediosInterno/teste'
import B from './componentes/medios/lowercase'
import Aleatorio from './componentes/basicos/Aleatorio'
import Card from './componentes/layout/Card'

ReactDOM.render(
    <div  id="id-principal">

        <Card titulo='Primeiro Ex'>

            {<Primeiro></Primeiro>}
        </Card>
        <Card titulo='Segundo Ex'>
        <Segundo testedepropriedadedentrodoreact= 'teste de porpriedades através dos import e export(deu certo mesmo)'></Segundo>
        </Card>
        <Card titulo='Teste de renderização'>
        <A></A>
        </Card>
        <Card titulo='Teste de Case'>
        <B></B>
        </Card>
        <Card titulo='Número aleatório'>
        <Aleatorio min={1} max={10}></Aleatorio>
        </Card>
    </div>
    , document.querySelector('#root'))