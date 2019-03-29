import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Input } from 'antd';
const Search = Input.Search;
const ProductList = ({ onDelete, onAdd, products}) => {
    const columns = [{
        title:'Name',
        dataIndex:'name',
    },{
        title:'Actions',
        render:(text, record) => {
            return (
                <Popconfirm title='Delete?' onConfirm={()=>onDelete(record.id)}>
                  <Button>Delete</Button>
                </Popconfirm>
            )
        }
    }]
    return (
        <div>
          <Search
            placeholder="input text"
            onSearch={value => onAdd(value)}
            enterButton="Add"/>
          <Table
          dataSource={products}
          columns={columns}></Table>  
        </div>
        
    )
}

ProductList.propTypes = {
    onDelete: PropTypes.func.isRequired,
    products:PropTypes.array.isRequired,
}

export default ProductList;