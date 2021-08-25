import React from 'react'

import './style.css'

export default function ChartItemPopulate({item}) {
    const {name,population} = item

    const showStyle = (data) => {
        let world = 7349137231
        let ratio = data*100/world

        return {
            backgroundColor:'orange',
            width:`${Number(ratio)}%`,
            height:'30px'
        }
    }

    const editPopulate = (popu) => {
        let result = String(popu)
        result = result.split('')
        let count = 1
        for(let i = result.length-1; i>=0;i--) {
            if(count%3===0 && i!==0) result.splice(i,0,',')
            count ++
        }

        return result
    }

    return (
        <div className="chart-item">
            <div className="name" style={{fontWeight:'bold'}}>
                {name.toUpperCase()}
            </div>

            <div className="progress">
                <div className="myProgress">
                    <div style={showStyle(population)}></div>
                </div>
            </div>

            <div className="score">
                {editPopulate(population)}
            </div>
        </div>
    )
}
