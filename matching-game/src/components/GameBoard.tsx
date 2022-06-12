import React, { useState } from 'react';
import { GameMath } from '../utils/GameMath'

export const GameBoard = () => {
   const [icos, setIcos] = useState(GameMath.random(1, 9));

   return (
     <div className="game">
       <div className="help">
         Pick 1 or more numbers that sum to the number of Intertwined Fates
       </div>
       <div className="body">
         <div className="left">
            {GameMath.getArrayRange(1, icos).map(id => {
               return (<div key={id} className="ico" />);
            })}
         </div>
         <div className="right">
            {GameMath.getArrayRange(1, 9).map(num => {
               return (<button key={num} className="number">{num}</button>);
            })}
         </div>
       </div>
       <div className="timer">Time Remaining: 10</div>
     </div>
   );
 };

 export const colors = {
   available: 'lightgray',
   used: 'lightgreen',
   wrong: 'lightcoral',
   candidate: 'deepskyblue',
 };