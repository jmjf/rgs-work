import React, { useState } from 'react';
import { GameMath } from '../utils/GameMath'
import { IconPanel } from './IconPanel';
import { NumberButton } from './NumberButton';

export const GameBoard = () => {
   const [icos, setIcos] = useState(GameMath.random(1, 9));

   return (
     <div className="game">
       <div className="help">
         Pick 1 or more numbers that sum to the number of images
       </div>
       <div className="body">
         <div className="left">
            <IconPanel iconCount={icos} />
         </div>
         <div className="right">
            {GameMath.getArrayRange(1, 9).map(num => {
               return (<NumberButton key={num} number={num} />);
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