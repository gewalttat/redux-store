import React from 'react';
import { connect } from 'react-redux';

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart } from '../../actions/actions.js';

import './shopping-cart-table.css';


//тащит всё говно из пропс
const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  //аналог функции рендер(?)
  const renderRow = (item, idx) => {
    //тащит всё говно из айтема и отрисовывает
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};


//получает пропсы и присваивает их в стейт
const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

//диспатчит экшены в стейт
//пока что пустая
const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
};

//обёртка
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
