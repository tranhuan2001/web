import React from 'react'
import Search from './Search'
import Sort from './Sort'

class Control extends React.Component {
   render() {
      return (
         <div className="row mt-20">
            {/* Search */}
            <Search />
            {/* End search */}

            {/* Sort */}
            <Sort />
            {/* End sort */}
         </div>
      )
   }
}

export default Control