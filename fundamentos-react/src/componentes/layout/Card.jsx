import './Card.css'
import React from 'react'

export default (props) => {
    console.log('aaaaaaaaaa');
    const estilo = {
        backgroundColor : props.cor || '#808080',
        
    }
    const bg = {
         borderColor: props.cor || '#808080'
    }
    return (
        <div className='Card' style={bg}>
            <div className="titulo" style={estilo}>{props.titulo}</div>
            <div className='comp' >
                {props.children}
            </div>
        </div>
    )
}