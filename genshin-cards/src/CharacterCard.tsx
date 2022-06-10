import React from 'react';
import './CharacterCard.css';

export class CharacterCard extends React.Component {
   render() {
      return(
         <div className="character-profile">
            <img src="https://via.placeholder.com/75" alt="character icon"/>
            <div className="info">
               <div className="name">name, title</div>
               <div className="element-and-weapon">element weapon</div>
               <div className="nation-and-affiliation">nation, affiliation</div>
            </div>
         </div>)
      ;
   }
}