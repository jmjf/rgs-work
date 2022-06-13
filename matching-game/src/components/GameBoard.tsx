import React, { useState } from 'react';
import { GameMath } from '../utils/GameMath'
import { IconPanel } from './IconPanel';
import { NumberButton } from './NumberButton';

export const GameBoard = () => {
   const [iconCount, setIconCount] = useState(GameMath.random(1, 9));
   // availableNumbers -> numbers left to choose from
   const [availableNumbers, setAvailableNumbers] = useState(GameMath.arrayRange(1, 9));
   // selectedNumbers -> numbers clicked this turn -- if sum of selected > iconCount, they're wrong
   const [selectedNumbers, setSelectedNumbers] = useState([] as number[]);

   const isSelectedWrong = () => (GameMath.sum(selectedNumbers) > iconCount);

   const calcNumberButtonStatus = (n: number): string => {
      // if it's used, it can't be anything else
      if (!availableNumbers.includes(n)) return 'used';

      if (selectedNumbers.includes(n)) {
         return isSelectedWrong() ? 'wrong' : 'selected'
      }
      // if it's none of the above, it must be available
      return 'available';
   };

   const onNumberClick = (num: number, status: string) => {
      if (status === 'used') return;

      const newSelectedNumbers = 
         status === 'available'
            ? selectedNumbers.concat(num)
            : selectedNumbers.filter(n => n !== num);
            
      if (GameMath.sum(newSelectedNumbers) !== iconCount) {
         setSelectedNumbers(newSelectedNumbers);
      } else {
         const newAvailableNumbers = availableNumbers.filter(n => !newSelectedNumbers.includes(n));
         setIconCount(GameMath.randomSumIn(newAvailableNumbers, 9));
         setAvailableNumbers(newAvailableNumbers);
         setSelectedNumbers([]);
      }

   }

   return (
     <div className="game">
       <div className="help">
         Pick 1 or more numbers that sum to the number of images
       </div>
       <div className="body">
         <div className="left">
            <IconPanel iconCount={iconCount} />
         </div>
         <div className="right">
            {GameMath.arrayRange(1, 9).map(num => {
               return (
                  <NumberButton
                     key={num}
                     number={num}
                     buttonStatus={calcNumberButtonStatus(num)}
                     onClick={onNumberClick}
                  />);
            })}
         </div>
       </div>
       <div className="timer">Time Remaining: 10</div>
     </div>
   );
 };