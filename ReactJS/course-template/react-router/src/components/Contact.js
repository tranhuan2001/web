import React from 'react';
import { Prompt } from 'react-router-dom';

class Contact extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isSwitch: false,
      };
   }

   handleSwitchPage = (isSwitch) => {
      this.setState({
         isSwitch: isSwitch,
      });
   };

   render() {
      var { isSwitch } = this.state;

      return (
         <div className="text-center">
            <h2>Contact</h2>
            <button
               type="button"
               className="btn btn-success"
               onClick={() => this.handleSwitchPage(false)}
            >
               Chuyển
            </button>
            &nbsp;
            <button
               type="button"
               className="btn btn-danger"
               onClick={() => this.handleSwitchPage(true)}
            >
               Hỏi Trước Khi Chuyển
            </button>
            <Prompt
               when={isSwitch}
               message={(location) => `Bạn đang chuyển đến ${location.pathname}`}
            ></Prompt>
         </div>
      );
   }
}

export default Contact;
