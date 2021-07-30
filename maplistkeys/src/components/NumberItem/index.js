import React from 'react'
import './style.css'

export default function NumberItem({number,style}) {
    return (
        <li className="number-item" style={{backgroundColor:style}}>
            {number}
        </li>
    )
}
