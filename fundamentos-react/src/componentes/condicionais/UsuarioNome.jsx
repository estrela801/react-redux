import React from "react";
import _if from "./if";


export default (props) => {
    const nome = props.nome
    const usuario = props.nome || 'Usuario'
  return (
    <div>
      <_if teste={nome}>
        Olá {props.nome}
      </_if>

      <_if teste={!nome}>
        Olá Usuario
      </_if>
    </div>
  );
};