import axios, { AxiosError } from 'axios';
import React from 'react';
import './UserInputForm.css';

interface IFormProps {
   onSubmit: (newData: any) => boolean;
}

type APIError = {
   error: boolean,
   message: string
}

export class UserInputForm extends React.Component<IFormProps> {
   state = {
      name: '',
      statusMessage: ''
   };

   handleSubmit = async (ev: React.SyntheticEvent) => {
      ev.preventDefault();

      let msg = '';
      try {
         const res = await axios.get(`https://genshin-app-api.herokuapp.com/api/characters/info/${this.state.name}?infoDataSize=minimal`);

         if (res.data.error === false) {
            if (this.props.onSubmit(res.data)) {
               msg = `Added ${res.data.payload.character.name}`;
            } else {
               msg = `${res.data.payload.character.name} already on the list`;
            }
         } else {
            msg = `${res.data.payload.character.name} already on the list`;
         }
      } catch (e) {
         const err = ((e as AxiosError).response?.data) as APIError
         msg = `ERROR: ${this.state.name} - ${err.message}`;
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