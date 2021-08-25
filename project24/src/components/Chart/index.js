import React from 'react'
import ChartItemPopulate from '../ChartItemPopulate'
import ChartItemLanguage from '../ChartItemLanguage'

import './style.css'

export default function Chart({data,sortName}) {
    const showChartPopulate = (data) => {
        let result = null
        if(data.length >0) {
            let show10Country = []
            let worldPopulate = 0

            // them world
            data.forEach(element => {
                worldPopulate += element.population 
            });
            show10Country.push({
                name:'World',
                population:worldPopulate
            })

            // sort va add 10 world lon nhat vao
            let populate = data.sort((a,b) => -a.population + b.population)
            for(let i = 0; i < 10; i++) {
                show10Country.push(populate[i])
            }
            result = show10Country.map(item => <ChartItemPopulate key={item.name} item={item} />)
        }

        return result
    }

    const showChartLang = (data) => {
        let result = []
        if(data.length >0) {
            
            // tao 1 mang tong hop tat cac language cua cac nuoc
            let result1 = []
            for(let i = 0; i < data.length; i++) {
                for(let j = 0 ; j < data[i].languages.length; j++) {
                    result1.push(data[i].languages[j].name)
                }
            }

            // dem so luong languages pho bien
            let result1Set = new Set(result1)
            let counts = []
            
            for(let languageSet of result1Set) {
                let filterLang = result1.filter(lang => lang === languageSet)

                counts.push({
                    language: languageSet,
                    count: filterLang.length
                })
            }

            // dem xong sort tu lon den be
            counts = counts.sort((a,b) => -a.count + b.count)
            let show10Count = []

            // sau do add vao mang 10 phan tu pho bien
            for(let i = 0; i < 10; i++) {
                show10Count.push(counts[i])
            }
            result = show10Count.map(item => <ChartItemLanguage key={item.language} item={item} />)
        }

        return result
    }

    return (
        <div className="chart" id="chart">
            {sortName===0 && showChartPopulate(data)}
            {sortName===1 && showChartLang(data)}
        </div>
    )
}
