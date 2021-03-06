import React from 'react';
import { connect } from 'dva'
import ProductList from '../components/ProductList'

const Products = ({dispatch, products}) => {
  function handleDelete(id){
    dispatch({
      type:'products/delete',
      payload: id,
    })
  }
  function handleAdd(value){
    const item = { key: products.length+1, name: value, id: products.length+1 };
    dispatch({
      type:'products/add',
      payload: item
    })
  }

  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} onAdd={handleAdd} products={products}/>
    </div>
  )
};

export default connect(({ products }) => ({
  products,
}))(Products)