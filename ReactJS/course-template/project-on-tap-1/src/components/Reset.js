import React, {Component} from 'react'

class Reset extends Component {
   setDefault = () => {
      this.props.onSettingDefault(1)
   }

   render() {
      return (
         <button
            type="button"
            className="btn btn-primary"
            onClick={this.setDefault}
         >Reset</button>
      )
   }
}

export default Reset