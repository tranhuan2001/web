import React from 'react'

class Sort extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         by: 'name',
         value: 1
      }
   }

   onSortClick = (sortName, sortValue) => {
      this.setState({
         by: sortName,
         value: sortValue
      }, () => {
         this.props.onSortClick(this.state)
      })
   }

   render() {
      var {by, value} = this.state
      
      return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
               <button className="btn btn-primary dropdown-toggle" type="button">
                  Sắp xếp
                  <ul className="dropdown-menu">
                     <li onClick={() => this.onSortClick('name', 1)}>
                        <p
                           role="button"
                           className={(by === 'name' && value === 1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >
                           <i className="fas fa-sort-alpha-down"></i>&nbsp;
                           Tên A-Z
                        </p>
                     </li>
                     <li onClick={() => this.onSortClick('name', -1)}>
                        <p
                           role="button"
                           className={(by === 'name' && value === -1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >
                           <i className="fas fa-sort-alpha-up"></i>&nbsp;
                           Tên Z-A
                        </p>
                     </li>
                     <li role="separator" className="divider"></li>
                     <li onClick={() => this.onSortClick('status', 1)}>
                        <p
                           role="button"
                           className={(by === 'status' && value === 1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >Trạng Thái Kích Hoạt</p>
                     </li>
                     <li onClick={() => this.onSortClick('status', -1)}>
                        <p
                           role="button"
                           className={(by === 'status' && value === -1) ? 'dropdown-item sort_selected' : 'dropdown-item'}
                        >Trạng Thái Ẩn</p>
                     </li>
                  </ul>
               </button>
            </div>
         </div>
      )
   }
}

export default Sort