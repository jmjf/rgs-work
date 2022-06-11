import React from 'react';
import './CharacterCard.css';

export interface ICharacterCardProps {
   name: string,
   element: string,
   weaponType: string,
   description: string,
   iconURL: string
}
export class CharacterCard extends React.Component<ICharacterCardProps> {
   render() {
      const charInfo = this.props;
      return(
         <div className="character-profile">
            <img src={charInfo.iconURL} alt="character icon"/>
            <div className="info">
               <div className="name">{charInfo.name}</div>
               <div className="element-and-weapon">{charInfo.element} {charInfo.weaponType}</div>
               <div className="description">{charInfo.description}</div>
            </div>
         </div>
      );
   }
}