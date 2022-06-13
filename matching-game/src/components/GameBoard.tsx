import React, { useState, useEffect } from 'react';
import { GameMath } from '../utils/GameMath'
import { IconPanel } from './IconPanel';
import { NumberButton } from './NumberButton';
import { ResetGamePanel } from './ResetGamePanel';

import './GameBoard.css';

const START_SECONDS = 10;

export const GameBoard = () => {
   const [iconCount, setIconCount] = useState(GameMath.random(1, 9));
   // availableNumbers -> numbers left to choose from
   const [availableNumbers, setAvailableNumbers] = useState(GameMath.arrayRange(1, 9));
   // selectedNumbers -> numbers clicked this turn -- if sum of selected > iconCount, they're wrong
   const [selectedNumbers, setSelectedNumbers] = useState([] as number[]);
   const [remainingSecondsCount, setRemainingSecondsCount] = useState(START_SECONDS);

   // run the timer (decrement every second)
   useEffect(() => {
      if (remainingSecondsCount > 0 && availableNumbers.length > 0) {
         const timerId = setTimeout(() => {
            setRemainingSecondsCount(remainingSecondsCount - 1);
         }, 1000);
         // when the component unmounts, this will run -- issue: allows a cheat
         return () => clearTimeout(timerId);
      }
   });

   const isSelectedWrong = (GameMath.sum(selectedNumbers) > iconCount);
   const gameStatus = (availableNumbers.length === 0)
      ? 'win'
      : (remainingSecondsCount === 0) ? 'lose' : 'playing';

   const initializeGame = () => {
      setIconCount(GameMath.random(1, 9));
      setAvailableNumbers(GameMath.arrayRange(1, 9));
      setSelectedNumbers([]);
   };

   const calcNumberButtonStatus = (n: number): string => {
      // if it's used, it can't be anything else
      if (!availableNumbers.includes(n)) return 'used';

      if (selectedNumbers.includes(n)) {
         return isSelectedWrong ? 'wrong' : 'selected'
      }
      // if it's none of the above, it must be available
      return 'available';
   };

   const onNumberClick = (num: number, status: string) => {
      if (status === 'used' || gameStatus !== 'playing') return;

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
   };

   return (
     <div className="game">
       <div className="help">
         Pick 1 or more numbers that sum to the number of images
       </div>
       <div className="body">
         <div className="left">
            {(gameStatus !== 'playing')
               ? (<ResetGamePanel onClick={initializeGame} gameStatus={gameStatus} />)
               : (<IconPanel iconCount={iconCount} />)
            }
            
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
       <div className="timer">Time Remaining: {remainingSecondsCount}</div>
     </div>
   );
 };