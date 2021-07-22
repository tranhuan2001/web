import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
   actAddProductRequest,
   actGetProductRequest,
   actUpdateProductRequest,
} from '../../actions';

class ProductActionPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         id: '',
         txtName: '',
         txtPrice: '',
         checkStatus: false,
      };
   }

   componentDidMount() {
      var { match } = this.props;
      if (match) {
         var id = match.params.id;
         this.props.onEditProduct(id);
      }
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (nextProps && nextProps.itemEditing) {
         var { itemEditing } = nextProps;
         this.setState({
            id: itemEditing.id,
            txtName: itemEditing.name,
            txtPrice: itemEditing.price,
            checkStatus: itemEditing.status,
         });
      }
   }

   handleChange = (e) => {
      var target = e.target;
      var name = target.name;
      var value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
         [name]: value,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();
      var { txtName, txtPrice, checkStatus, id } = this.state;
      var { history } = this.props;
      var product = {
         id,
         name: txtName,
         price: txtPrice,
         status: checkStatus,
      };
      if (id) {
         this.props.onUpdateProduct(product);
         history.goBack();
      } else {
         this.props.onAddProduct(product);
         history.goBack();
      }
   };

   render() {
      var { txtName, txtPrice, checkStatus } = this.state;

      return (
         <div className="container">
            <div className="row justify-content-md-center mt-30">
               <div className="col-6 card">
                  <form className="card-body" onSubmit={this.handleSubmit}>
                     <div className="form-group mb-10">
                        <label>Tên sản phẩm</label>
                        <input
                           type="text"
                           className="form-control"
                           name="txtName"
                           required
                           value={txtName}
                           onChange={this.handleChange}
                        />
                     </div>
                     <div className="form-group mb-10">
                        <label>Giá</label>
                        <input
                           type="text"
                           className="form-control"
                           name="txtPrice"
                           required
                           value={txtPrice}
                           onChange={this.handleChange}
                        />
                     </div>
                     <div className="form-check mb-10">
                        <input
                           type="checkbox"
                           className="form-check-input"
                           name="checkStatus"
                           value={checkStatus}
                           onChange={this.handleChange}
                           checked={checkStatus}
                        />
                        <label className="form-check-label">Còn hàng</label>
                     </div>
                     <Link to="/products" className="btn btn-primary mr-10">
                        Trở lại
                     </Link>
                     <button type="submit" className="btn btn-success">
                        Gửi
                     </button>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      itemEditing: state.itemEditing,
   };
};

const mapDispatchToProps = (dispatch, props) => {
   return {
      onAddProduct: (product) => {
         dispatch(actAddProductRequest(product));
      },
      onEditProduct: (product) => {
         dispatch(actGetProductRequest(product));
      },
      onUpdateProduct: (product) => {
         dispatch(actUpdateProductRequest(product));
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
