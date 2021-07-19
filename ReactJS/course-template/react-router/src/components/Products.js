import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Product from './Product';

class Products extends React.Component {
   render() {
      var products = [
         {
            id: 1,
            slug: 'iphone',
            name: 'Iphone X',
            price: 10000000,
            quantity: 10,
         },
         {
            id: 2,
            slug: 'samsung',
            name: 'Samsung Galaxy S7',
            price: 12000000,
            quantity: 12,
         },
         {
            id: 3,
            slug: 'oppo',
            name: 'Oppo F1s',
            price: 11000000,
            quantity: 14,
         },
      ];

      var { match, location } = this.props;
      console.log(location);

      var result = products.map((product, index) => {
         return (
            <NavLink key={index} to={`${match.url}/${product.slug}`}>
               <li className="list-group-item d-flex justify-content-between align-items-center">
                  {product.id} - {product.name} - {product.price}
                  <span className="badge bg-primary rounded-pill">
                     {product.quantity}
                  </span>
               </li>
            </NavLink>
         );
      });

      return (
         <div className="container !justify !shadow">
            <div className="row auto">
               <h2>Products</h2>
               <div className="col-4">
                  <ul className="list-group">{result}</ul>
               </div>
               <div className="col-8">
                  <Route path="/products/:slug" component={Product}></Route>
               </div>
            </div>
         </div>
      );
   }
}

export default Products;
