import React, { Component } from 'react'

export default class index extends Component {
    showWeight () {
        let result = 0
        let count = 1
        const newCats = [...this.props.data]

        const weights = newCats.map((cat) => {
            let length = cat.weight.metric.length
            let min = cat.weight.metric[0]
            let max = cat.weight.metric[length-2] === ' ' ? cat.weight.metric[length-1] 
                                                        : cat.weight.metric.slice(-2)
            let average = (Number(min) + Number(max)) / 2
            return average
        })

        weights.forEach((weight) => {
            count ++
            result += weight

        })

        let resultAverage = result/count
        return Math.round(resultAverage)
    }

    showOld () {
        let result = 0
        let count = 1
        const newCats = [...this.props.data]

        const lifeSpan = newCats.map((cat) => {
            let length = cat.life_span.length
            let min = cat.life_span[1] === ' ' ? cat.life_span[0] 
                                                : cat.life_span.slice(0,2)
            let max = cat.life_span[length-2] === ' ' ? cat.life_span[length-1] 
                                                        : cat.life_span.slice(-2)
            let average = (Number(min) + Number(max)) / 2
            return average
        })

        lifeSpan.forEach((life) => {
            count ++
            result += life

        })
        
        let resultAverage = result/count
        return Math.round(resultAverage)
    }
    
    render() {
        // const {data} = this.props
        return (
            <React.Fragment>
                <p className="title-cat">On average a cat can weight about  
                <span> {this.showWeight()}</span> Kg and live <span>{this.showOld()}</span > years</p>
            </React.Fragment>
        )
    }
}
