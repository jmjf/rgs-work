import React from 'react';
import { CardList } from './components/CardList';
import { UserInputForm } from './components/UserInputForm';
import './App.css';

interface ICharacterData {
  error: boolean,
    payload: {
      character: {
      name: string,
      description: string,
      element: string,
      weaponType: string,
      iconURL: string
    }
  }
}

// export const App = ({title}: AppProps) => {
//   return (<div className="header">{title}</div>);
// };

export interface IAppProps {
  title: string;
}

export interface IAppState {
  data: ICharacterData[];
}

export class App extends React.Component<IAppProps, IAppState>{
  state = {
    data: []
  };

  addData = (newData: any): boolean => {
    const findResult = this.state.data.findIndex((c: ICharacterData) => { return (c.payload.character.name === newData.payload.character.name) });
    if (findResult === -1) {
      this.setState(prevState => { return { data: [...prevState.data, newData ]} });
      return true;
    }
    return false;
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <UserInputForm onSubmit={this.addData}/>
        <CardList data={this.state.data}/>
      </div>
    );
  }
}
