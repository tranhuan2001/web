import React from 'react'
import * as actions from '../actions/index'
import { connect } from 'react-redux'

class Sort extends React.Component {
   handleSort = (sortBy, sortValue) => {
      this.props.onSort({
         by: sortBy,
         value: sortValue
      })
   }

   render() {
      var {sort} = this.props
      
      return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
               <button className="btn btn-primary dropdown-toggle" type="button">
                  Sắp xếp
                  <ul className="dropdown-menu">
                     <li onClick={() => this.handleSort('name', 1)}>
                        <p
                           role="button"
                           className={(sort.by === 'name' && sort.value === 1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >
                           <i className="fas fa-sort-alpha-down"></i>&nbsp;
                           Tên A-Z
                        </p>
                     </li>
                     <li onClick={() => this.handleSort('name', -1)}>
                        <p
                           role="button"
                           className={(sort.by === 'name' && sort.value === -1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >
                           <i className="fas fa-sort-alpha-up"></i>&nbsp;
                           Tên Z-A
                        </p>
                     </li>
                     <li role="separator" className="divider"></li>
                     <li onClick={() => this.handleSort('status', 1)}>
                        <p
                           role="button"
                           className={(sort.by === 'status' && sort.value === 1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >Trạng Thái Kích Hoạt</p>
                     </li>
                     <li onClick={() => this.handleSort('status', -1)}>
                        <p
                           role="button"
                           className={(sort.by === 'status' && sort.value === -1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >Trạng Thái Ẩn</p>
                     </li>
                  </ul>
               </button>
            </div>
         </div>
      )
   }
}

const mapStateToProps = (state) => {
   return {
      sort: state.sortTask
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onSort: (sort) => {
         dispatch(actions.sortTask(sort))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort)