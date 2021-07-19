import React from 'react';
import ProductList from '../components/ProductList';
import { connect } from 'react-redux';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage } from '../actions/index';

class ProductsContainer extends React.Component {
   showProducts(products) {
      var result = null;
      var { onAddToCart, onChangeMessage } = this.props;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return (
               <ProductItem
                  key={index}
                  product={product}
                  onAddToCart={onAddToCart}
                  onChangeMessage={onChangeMessage}
               />
            );
         });
      }
      return result;
   }

   render() {
      var { products } = this.props;
      return <ProductList>{this.showProducts(products)}</ProductList>;
   }
}

ProductsContainer.propTypes = {
   products: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.number.isRequired,
         name: PropTypes.string.isRequired,
         image: PropTypes.string.isRequired,
         description: PropTypes.string.isRequired,
         price: PropTypes.number.isRequired,
         inventory: PropTypes.number.isRequired,
         rating: PropTypes.number.isRequired,
      })
   ).isRequired,
   onAddToCart: PropTypes.func.isRequired,
   onChangeMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
   return {
      products: state.products,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      onAddToCart: (product) => {
         dispatch(actAddToCart(product, 1));
      },
      onChangeMessage: (message) => {
         dispatch(actChangeMessage(message));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
