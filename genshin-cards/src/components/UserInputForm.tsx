import React from 'react';

import { IGenshinApiAdapter } from '../adapters/GenshinApiAdapter';
import './UserInputForm.css';

interface IFormProps {
   onSubmit: (newData: any) => boolean,
   apiAdapter: IGenshinApiAdapter
};

export class UserInputForm extends React.Component<IFormProps> {
   state = {
      name: '',
      statusMessage: ''
   };

   handleSubmit = async (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      let msg = '';

      const characterResult = await this.props.apiAdapter.getCharacter(this.state.name);
      if (characterResult.isErr()) {
         msg = characterResult.error.message;
      } else {
         msg = (this.props.onSubmit(characterResult.value)) 
            ? `Added ${characterResult.value.name}.`
            : `${characterResult.value.name} is already on the list.`
         ;
      }

      this.setState({ name: '', statusMessage: msg });
   }

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div className="item">
               <input 
                  type="text"
                  value={this.state.name}
                  onChange={event => this.setState({ name: event.target.value })}
                  placeholder="Character name"
                  required
               />
               <button>Add</button>
            </div>
            <div className="item break"></div>
            <div className="item"><p className="statusMessage">{this.state.statusMessage}</p></div>
         </form>
      );
   }
}