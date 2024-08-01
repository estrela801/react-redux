import React from "react";
import alunos from "../../data/alunos";

export default (props)=>{
    const al = alunos.map(aluno =>{
        return(
        <li key={aluno.id} style={{listStyle:'none'}}>
            {aluno.id} - {aluno.nome} tirou a nota {aluno.nota}
        </li>
        )
    })

    return (
        <div>
            <ul>
                {al}
            </ul>
        </div>
    )
}