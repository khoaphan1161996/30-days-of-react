import React from 'react'

import './style.css'

export default function ResultItem({item}) {
    const {flag,name,capital,languages,population} = item
    const languagesEdit = languages.map(lang => lang.name).join(', ')

    const editPopulate = (popu) => {
        let result = String(popu)
        result = result.split('')
        let count = 1
        for(let i = result.length-1; i>=0;i--) {
            if(count%3==0) result.splice(i,0,',')
            count ++
        }

        return result
    }

    return (
        <div className="result__item">
            <img src={flag} alt="name" />
            <h3>{name}</h3>
            <div className="result__item-text">
                <p><span className="bold">Capital:</span> {capital}</p>
                <p><span className="bold">Languages:</span> {languagesEdit}</p>
                <p><span className="bold">Population:</span> {editPopulate(population)}</p>
            </div>
        </div>
    )
}
