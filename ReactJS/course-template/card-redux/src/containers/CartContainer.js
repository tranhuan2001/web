import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CartList from '../components/CartList';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as message from '../constants/Messages';
import {
   actRemoveCartItem,
   actChangeMessage,
   actPlusProduct,
   actMinusProduct,
} from '../actions/index';

class CartContainer extends React.Component {
   render() {
      var { cart } = this.props;
      return (
         <CartList>
            {this.showCart(cart)}
            {this.showTotalAmount(cart)}
         </CartList>
      );
   }

   showCart = (cart) => {
      var result = (
         <tr>
            <td>{message.MSG_CART_EMPTY}</td>
         </tr>
      );
      var { onRemoveCartItem, onChangeMessage, onPlusProduct, onMinusProduct } =
         this.props;
      if (cart.length > 0) {
         result = cart.map((item, index) => {
            return (
               <CartItem
                  key={index}
                  cartItem={item}
                  onRemoveCartItem={onRemoveCartItem}
                  onChangeMessage={onChangeMessage}
                  onPlusProduct={onPlusProduct}
                  onMinusProduct={onMinusProduct}
               />
            );
         });
      }
      return result;
   };

   showTotalAmount = (cart) => {
      var result = null;
      if (cart.length > 0) {
         result = <CartResult cartItem={cart} />;
      }
      return result;
   };
}

CartContainer.propTypes = {
   cart: PropTypes.arrayOf(
      PropTypes.shape({
         product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired,
         }),
         quantity: PropTypes.number.isRequired,
      })
   ).isRequired,
};

const mapStateToProps = (state) => {
   return {
      cart: state.cart,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      onRemoveCartItem: (product) => {
         dispatch(actRemoveCartItem(product));
      },
      onChangeMessage: (message) => {
         dispatch(actChangeMessage(message));
      },
      onPlusProduct: (product) => {
         dispatch(actPlusProduct(product));
      },
      onMinusProduct: (product) => {
         dispatch(actMinusProduct(product));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
