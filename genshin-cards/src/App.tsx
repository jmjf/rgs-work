import React from 'react';
import { CardList } from './CardList';
import { UserInputForm } from './UserInputForm';
import './App.css';

const testData = [
  {
     error: false,
     payload: {
        character: {
        name: 'Amber',
     description: `Always energetic and full of life, Amber's the best - albeit only - Outrider of the Knights of Favonius.`,
     element: 'Pyro',
     weaponType: 'Bow',
        iconURL: 'https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/amber/icon.png'
        }
     }
  },
  {
     error: false,
     payload: {
        character: {
        name: 'Bennett',
     description: `A righteous and good-natured adventurer from Mondstadt who's unfortunately extremely unlucky.`,
     element: 'Pyro',
     weaponType: 'Sword',
        iconURL: 'https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/bennett/icon.png'
        }
     }
  },
  {
     error: false,
     payload: {
        character: {
        name: 'Chongyun',
     description: `A young exortcist from a family of exorcists. He does everything he can to suppress his pure positive energy.`,
     element: 'Cryo',
     weaponType: 'Claymore',
        iconURL: 'https://res.cloudinary.com/dnoibyqq2/image/upload/v1622044760/genshin-app/characters/chongyun/icon.png'
        }
     }
  },
  {
     error: false,
     payload: {
        character: {
        name: 'Kazuha',
     description: `A wandering samurai from Inazuma who is currently with Liyue's Crux Fleet. A gentle and carefree soul whose heart hides a great many burdens from the past. It's hard to say if weathering life's storms has eroded any sharp edges he once had or his reserved nature keeps them hidden from view. The first time most people meet Kaedehara Kazuha, they presume he is just another trainee crew member aboard The Crux.`,
     element: 'Anemo',
     weaponType: 'Sword',
        iconURL: 'https://res.cloudinary.com/dnoibyqq2/image/upload/v1625656971/genshin-app/characters/kazuha/icon.png'
        }
     }
  }, 
];

// export const App = ({title}: AppProps) => {
//   return (<div className="header">{title}</div>);
// };

export interface IAppProps {
  title: string;
}

export interface IAppState {
  data: any[];
}

export class App extends React.Component<IAppProps, IAppState>{
  state = {
    data: testData
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <UserInputForm />
        <CardList data={this.state.data}/>
      </div>
    );
  }
}
