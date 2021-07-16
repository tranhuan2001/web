import React from 'react'
import * as actions from '../actions/index'
import { connect } from 'react-redux'

class Search extends React.Component {
   handleChange = (event) => {
      this.props.onSearch(event.target.value)
   }

   handleSearch = () => {
      this.props.onSearch(this.props.keyword)
   }

   render() {
      var {keyword} = this.props

      return (
         <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
               <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Nhập từ khóa" 
                  name="keyword"
                  value={keyword}
                  onChange={this.handleChange}
               />
               <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={this.handleSearch}
               >
                  <i className="fas fa-search"></i>&nbsp;
                  Tìm
               </button>
            </div>
         </div>
      )
   }
}

const mapStateToProps = state => {
   return {
      keyword: state.searchTask
   }
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      onSearch: (keyword) => {
         dispatch(actions.searchTask(keyword))
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)