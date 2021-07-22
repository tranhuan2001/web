import React from 'react';

class ProductList extends React.Component {
   render() {
      return (
         <table className="table table-default table-striped table-bordered caption-top align-middle text-center">
            <caption>Danh sách sản phẩm</caption>
            <thead>
               <tr>
                  <th>STT</th>
                  <th>Mã</th>
                  <th>Tên</th>
                  <th>Giá</th>
                  <th>Trạng thái</th>
                  <th>Hành động</th>
               </tr>
            </thead>
            <tbody>
               {this.props.children}
            </tbody>
         </table>
      );
   }
}

export default ProductList;
