import React from 'react'
import { Table } from 'antd';
const List = ({ columns, data }) => {
    console.log(data)
    return (
        <Table columns={columns} dataSource={data} />
    )
}

export default List