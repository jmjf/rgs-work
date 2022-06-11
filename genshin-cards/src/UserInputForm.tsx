import React, { RefObject } from 'react';
import './UserInputForm.css';

export class UserInputForm extends React.Component {
   nameInput = React.createRef() as RefObject<HTMLInputElement>;

   handleSubmit = (ev: React.SyntheticEvent) => {
      ev.preventDefault();
      const name = this.nameInput.current?.value;
      console.log(name);
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input 
               ref={this.nameInput}
               type="text"
               placeholder="Character name"
               required
            />
            <button>Add</button>
         </form>
      );
   }
}