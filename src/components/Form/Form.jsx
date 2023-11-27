import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const Form = ({ setData, data, getData }) => {
    const [name, setName] = useState("")
    const [quantityPerUnit, setQuantityPerUnit] = useState("")
    const [unitPrice, setUnitPrice] = useState("")
    const addHandler = (name, quantityPerUnit, unitPrice) => {
        const postObject = {
            name: name,
            quantityPerUnit: quantityPerUnit,
            unitPrice: unitPrice
        }
        axios.post("https://northwind.vercel.app/api/products", postObject).then(res => {
            toast.success("item added")
            getData()
        })
    }
    return (
        <div>
            <input type="text" placeholder='name' onChange={(e) => {
                setName(e.target.value)
            }} />
            <input type="text" placeholder='quantityPerUnit' onChange={(e) => {
                setQuantityPerUnit(e.target.value)
            }} />
            <input type="text" placeholder='unitPrice' onChange={(e) => {
                setUnitPrice(e.target.value)
            }} />
            <button onClick={() => {
                addHandler(name, quantityPerUnit, unitPrice)
                setName(" ")
                setQuantityPerUnit(" ")
                setUnitPrice(" ")
            }}>Add Product</button>
            <Toaster />
        </div>
    )
}

export default Form