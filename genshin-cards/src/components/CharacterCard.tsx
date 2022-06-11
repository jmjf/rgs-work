import React from 'react';

import { IGenshinCharacterData } from '../adapters/GenshinApiAdapter';

import './CharacterCard.css';
export class CharacterCard extends React.Component<IGenshinCharacterData> {
   render() {
      const charInfo = this.props;
      return(
         <div className="character-profile">
            <img src={charInfo.imageUrl} alt="character icon"/>
            <div className="info">
               <div className="name">{charInfo.name}</div>
               <div className="element-and-weapon">{charInfo.element} {charInfo.weapon}</div>
               <div className="description">{charInfo.description}</div>
            </div>
         </div>
      );
   }
}