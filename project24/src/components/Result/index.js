import React from 'react'
import ResultItem from '../ResultItem'

import './style.css'

export default function Result({data}) {
    const showResultItem = (data) => {
        let  result = null
        if(data.length > 0) {
            result = data.map(item => <ResultItem key={item.name} item={item} />)
        }

        return result
    }

    return (
        <div className="result">
            {showResultItem(data)}
        </div>
    )
}
