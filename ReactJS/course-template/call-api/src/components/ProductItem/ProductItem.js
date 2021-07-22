import React from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends React.Component {
   render() {
      var { product, index } = this.props;
      var statusName = product.status ? 'Còn hàng' : 'Hết hàng';
      var statusClassName = product.status ? 'success' : 'danger';
      return (
         <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
               <span className={`label label-${statusClassName}`}>
                  {statusName}
               </span>
            </td>
            <td>
               <Link
                  className="btn btn-success mr-10"
                  to={`/products/${product.id}/edit`}
               >
                  Sửa
               </Link>
               <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => this.handleDelete(product.id)}
               >
                  Xóa
               </button>
            </td>
         </tr>
      );
   }

   handleDelete = (id) => {
      if (confirm('Bạn có muốn xóa sản phẩm?')) { // eslint-disable-line
         this.props.onDelete(id);
      }
   };
}

export default ProductItem;
