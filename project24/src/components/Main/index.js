import React,{useState, useEffect} from "react";
import Search from '../Search'
import Result from '../Result'

import axios from 'axios'

import './style.css'


export default function Main() {
    const [data,setData] = useState([])
    const [keyword,setKeyword] = useState('')

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
        console.log(value)
    }
    

    return (
        <div className="main">
            <Search onChangeValue={onChangeValue}/>
            <Result data={data} onChangeValue={onChangeValue}/>
        </div>
    )
}
