import './Card.css'
import React from 'react'

export default (props) => {
    return (
        <div className='Card'>
            <div className="titulo">{props.titulo}</div>
            <div className='comp'>
                {props.children}
            </div>
        </div>
    )
}