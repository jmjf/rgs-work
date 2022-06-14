import { useState } from 'react';
import { GameBoard } from './GameBoard'


export const CountThePaimons = () => {
   const [gameId, setGameId] = useState(1);

   return (<GameBoard key={gameId} resetGame={() => setGameId(gameId + 1)}/>);
}