import React from 'react';

import { IGenshinCharacterData } from './adapters/GenshinApiAdapter';
import { GenshinApiAdapter_GenshinAppApi } from './adapters/impl/GenshinApiAdapter-GenshinAppApi';
import { GenshinApiAdapter_ImpactMoe } from './adapters/impl/GenshinApiAdapter-ImpactMoe';

import { CardList } from './components/CardList';
import { UserInputForm } from './components/UserInputForm';
import './App.css';

const genshinApiAdapter = new GenshinApiAdapter_GenshinAppApi();

export interface IAppProps {
  title: string;
}

export interface IAppState {
  data: IGenshinCharacterData[];
}

export class App extends React.Component<IAppProps, IAppState>{
  state = {
    data: []
  };

  addData = (newData: any): boolean => {
    const findResult = this.state.data.findIndex((c: IGenshinCharacterData) => { return (c.id === newData.id) });
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
        <UserInputForm onSubmit={this.addData} apiAdapter={genshinApiAdapter}/>
        <CardList data={this.state.data}/>
      </div>
    );
  }
}
