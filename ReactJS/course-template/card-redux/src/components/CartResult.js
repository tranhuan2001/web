import React from "react";

class CartResult extends React.Component {
   render() {
      var { cartItem } = this.props;
      return (
         <tr>
            <td colSpan="3"></td>
            <td>
               <h4>
                  <strong>Tổng Tiền</strong>
               </h4>
            </td>
            <td>
               <h4>
                  <strong>{this.showTotalAmount(cartItem)}$</strong>
               </h4>
            </td>
            <td colSpan="3">
               <button
                  type="button"
                  className="btn btn-primary waves-effect waves-light"
               >
                  Complete purchase
                  <i className="fa fa-angle-right right"></i>
               </button>
            </td>
         </tr>
      );
   }

   showTotalAmount = (cartItem) => {
      var total = 0;
      if (cartItem.length > 0) {
         for (var i = 0; i < cartItem.length; ++i) {
            total += cartItem[i].product.price * cartItem[i].quantity;
         }
      }
      return total;
   };
}

export default CartResult;
