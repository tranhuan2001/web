// import React, {Component} from 'react'
import React from "react"

class ColorPicker extends React.Component{
   constructor(props) {
      super(props)
      this.state = {
         colors: ['red', 'green', 'blue', '#ccc']
      }
   }

   showColor(color) {
      return {
         backgroundColor: color,
      }
   }

   setActiveColor(color) {
      this.props.onReceiveColor(color)
   }

   render() {

      var colorElements = this.state.colors.map((color, index) => {
         return (
            <span
               key={index}
               style={this.showColor(color)}
               className={this.props.color === color ? 'active' : ''}
               onClick={() => this.setActiveColor(color)}
            ></span>
         )
      })
      
      return (
         <div className="panel">
            <div className="panel-heading">
               <h3 className="panel-title">Color Picker</h3>
            </div>
            <div className="panel-body">
               {colorElements}
            </div>
         </div>
      )
   }
}

export default ColorPicker