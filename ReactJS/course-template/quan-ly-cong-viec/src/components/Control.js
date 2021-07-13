import React from 'react'
import Search from './Search'
import Sort from './Sort'

class Control extends React.Component {
   render() {
      return (
         <div className="row mt-20">
            {/* Search */}
            <Search onSearch={this.props.onSearch}/>
            {/* End search */}

            {/* Sort */}
            <Sort onSortClick={this.props.onSortClick}/>
            {/* End sort */}
         </div>
      )
   }
}

export default Control