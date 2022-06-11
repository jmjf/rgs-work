import React from 'react';
import './UserInputForm.css';

export class UserInputForm extends React.Component {
   state = {
      name: ''
   };

   handleSubmit = (ev: React.SyntheticEvent) => {
      ev.preventDefault();
      console.log(this.state.name);
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input 
               type="text"
               value={this.state.name}
               onChange={event => this.setState({ name: event.target.value })}
               placeholder="Character name"
               required
            />
            <button>Add</button>
         </form>
      );
   }
}