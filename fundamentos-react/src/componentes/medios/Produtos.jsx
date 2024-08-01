import React from "react";
import produtos from '../../data/produtos'

export default (props) => {
    const prod = produtos.map((produto , i)=>{
        return(
            <div key={produto.id}> O produto: {produto.nome} ; Vale {produto.preco}</div>
        )
    })
  return (
    <div>
      {prod}
    </div>
  );
};