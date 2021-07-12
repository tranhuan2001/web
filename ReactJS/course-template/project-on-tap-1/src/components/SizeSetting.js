import React, {Component} from 'react'

class SizeSetting extends Component {
   changeSize(value) {
      this.props.onChangeSize(value)
   }
   
   render() {
      return (
         <div className="panel">
            <div className="panel-heading">
               <h3 className="panel-title">Size: {this.props.fontSize}px</h3>
            </div>
            <div className="panel-body">
               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.changeSize(-2)}
               >Giảm</button>&nbsp;&nbsp;&nbsp;&nbsp;

               <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.changeSize(2)}
               >Tăng</button>
            </div>
         </div>
      )
   }
}

export default SizeSetting