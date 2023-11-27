import axios from "axios";
import List from "./components/List/List";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import Form from "./components/Form/Form";
import "./App.css"
const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: "Quantity Per Unit",
        dataIndex: "quantityPerUnit",
        key: "quantityPerUnit",
    },
    {
        title: "Unit Price",
        dataIndex: "unitPrice",
        key: "unitPrice",
    },
    {
        title: "Delete",
        dataIndex: "delete",
        key: "delete",
        render: () => <button>Delete</button>
    }
];
function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const getData = async () => {
        const res = await axios.get("https://northwind.vercel.app/api/products")
        const data = res.data
        setData(data)
        setLoading(false)
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <div className="App">
            <Form setData={setData} data={data} getData={getData} />
            {
                loading ? <Spin className="spinner" /> : <List columns={columns} data={data} setData={setData} />
            }
        </div>
    );
}

export default App;
