import React from 'react';

class Product extends React.Component {
   render() {
      var { match } = this.props;
      var { slug } = match.params;

      return <h2 className="text-center">Product: {slug}</h2>;
   }
}

export default Product;
