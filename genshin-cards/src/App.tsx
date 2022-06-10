import React from 'react';
import { CharacterCard } from './CharacterCard';
import './App.css';

export interface AppProps {
  title: string;
}

// export const App = ({title}: AppProps) => {
//   return (<div className="header">{title}</div>);
// };

export class App extends React.Component<AppProps>{
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <CharacterCard />
      </div>
    );
  }
}
