import React from 'react'

import './style.css'

export default function Button(props) {
    const onClickValue = (action) => {
        props.onClickValue(action)
    }

    return (
        <div className="btn">
            <button onClick={() => onClickValue(0)}>POPULATION</button>
            <button onClick={() => onClickValue(1)}>LANGUAGES</button>
            {props.sortName===0 && <p>10 Most populated countries in the world</p>}
            {props.sortName===1 && <p>10 Most spoken languages in the world</p>}
        </div>
    )
}
