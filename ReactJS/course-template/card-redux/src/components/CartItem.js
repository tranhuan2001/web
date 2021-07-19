import React from 'react';
import * as Messages from '../constants/Messages';

class CartItem extends React.Component {
   showSubTotal = (price, quantity) => {
      return price * quantity;
   };

   handleRemoveCartItem = (product) => {
      this.props.onRemoveCartItem(product);
      this.props.onChangeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
   };

   handleMinusProduct = (product) => {
      this.props.onMinusProduct(product);
      this.props.onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
   };

   handlePlusProduct = (product) => {
      this.props.onPlusProduct(product);
      this.props.onChangeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
   };

   render() {
      var { cartItem } = this.props;
      return (
         <tr>
            <th scope="row">
               <img
                  src={cartItem.product.image}
                  alt={cartItem.product.name}
                  className="img-fluid z-depth-0"
               />
            </th>
            <td>
               <h5>
                  <strong>{cartItem.product.name}</strong>
               </h5>
            </td>
            <td>{cartItem.product.price}$</td>
            <td className="center-on-small-only">
               <span className="qty">{cartItem.quantity} </span>
               <div className="btn-group radio-group" data-toggle="buttons">
                  <label
                     className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
                     onClick={() => this.handleMinusProduct(cartItem.product)}
                  >
                     <a href="#href">—</a>
                  </label>
                  <label
                     className="btn btn-sm btn-primary
                              btn-rounded waves-effect waves-light"
                     onClick={() => this.handlePlusProduct(cartItem.product)}
                  >
                     <a href="#href">+</a>
                  </label>
               </div>
            </td>
            <td>
               {this.showSubTotal(cartItem.product.price, cartItem.quantity)}$
            </td>
            <td>
               <button
                  type="button"
                  className="btn btn-sm btn-primary waves-effect waves-light"
                  data-toggle="tooltip"
                  data-placement="top"
                  title=""
                  data-original-title="Remove item"
                  onClick={() => this.handleRemoveCartItem(cartItem.product)}
               >
                  X
               </button>
            </td>
         </tr>
      );
   }
}

export default CartItem;
