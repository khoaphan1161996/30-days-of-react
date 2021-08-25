import React,{useState, useEffect} from "react";
import Search from '../Search'
import Result from '../Result'
import Button from '../Button'
import Chart from '../Chart'

import axios from 'axios'

import './style.css'

export default function Main() {
    let [data,setData] = useState([])
    const [keyword,setKeyword] = useState('')
    const [sortName,setSortName] = useState(0)

    useEffect( () => {
        async function fetchList() {
            try {
                const response = await axios.get('https://restcountries.eu/rest/v2/all')
                const data = response.data
                setData(data)
                
            } catch (error) {
                console.log(error)
            }
        }

        fetchList()
    },[])

    const onChangeValue = (value) => {
        setKeyword(value)
    }

    const onClickValue = (action) => {
        setSortName(action)
    }
    
    if(keyword) {
        data = data.filter(item => item.name.indexOf(keyword) !== -1)
    }

    return (
        <div className="main">
            <Search onChangeValue={onChangeValue}/>
            <Result data={data} onChangeValue={onChangeValue}/>
            <Button onClickValue={onClickValue} sortName={sortName}/>
            <Chart data={data} sortName={sortName}/>
        </div>
    )
}
