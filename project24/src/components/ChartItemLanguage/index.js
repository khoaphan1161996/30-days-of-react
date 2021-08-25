import React from 'react'

import './style.css'

export default function ChartItemLanguage({item}) {
    const {count,language} = item

    const showStyle = (data) => {
        let best = 91
        let ratio = data*100/best

        return {
            backgroundColor:'orange',
            width:`${Number(ratio)}%`,
            height:'30px'
        }
    }

    return (
        <div className="chart-item">
            <div className="name" style={{fontWeight:'bold'}}>
                {language.toUpperCase()}
            </div>

            <div className="progress">
                <div className="myProgress">
                    <div style={showStyle(count)}></div>
                </div>
            </div>

            <div className="score">
                {count}
            </div>
        </div>
    )
}
