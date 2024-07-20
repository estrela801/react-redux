import React from "react";

export default  props => {
    const min = props.min
    const max = props.max
    const num = parseInt(Math.random() * (max - min )) + min
    return(
        <div>
            <h2>Valor Aleatório</h2>
            <p><strong>Valor minimo :</strong> {min}</p>
            <p><strong>Valor máximo :</strong> {max}</p>
            <p><strong>Valor Escolhido :</strong> {num}</p>
         </div>
    )
}
    

