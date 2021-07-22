import React from 'react';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
   actFetchProductsRequest,
   actDeleteProductRequest,
} from '../../actions/index';

class ProductPage extends React.Component {
   componentDidMount() {
      this.props.fetchAllProducts();
   }

   onDelete = (id) => {
      this.props.onDeleteProduct(id);
   };

   showProducts = (products) => {
      var result = null;
      if (products.length > 0) {
         result = products.map((product, index) => {
            return (
               <ProductItem
                  key={index}
                  product={product}
                  index={index}
                  onDelete={this.onDelete}
               />
            );
         });
      }
      return result;
   };

   render() {
      var { products } = this.props;
      return (
         <div className="container">
            <div className="row justify-content-md-center">
               <div className="col-12">
                  <Link
                     className="btn btn-primary mt-30 mb-20"
                     to="/products/add"
                  >
                     Thêm sản phẩm
                  </Link>
                  <ProductList>{this.showProducts(products)}</ProductList>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      products: state.products,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      fetchAllProducts: () => {
         dispatch(actFetchProductsRequest());
      },
      onDeleteProduct: (id) => {
         dispatch(actDeleteProductRequest(id));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
