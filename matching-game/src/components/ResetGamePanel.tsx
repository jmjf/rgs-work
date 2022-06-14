import './ResetGamePanel.css';

interface IResetGamePanelProps {
   onClick: () => void,
   gameStatus: string
}

export const ResetGamePanel = (props: IResetGamePanelProps) => {
   return (
      <div className="game-over">
         <p 
            className="message"
            style={{ color: props.gameStatus === 'win' ? 'lawngreen' : 'white' }}
         >
            {props.gameStatus === 'win'
               ? 'You win!'
               : 'Try again.'
            }
         </p>
         <button onClick={props.onClick}>Play Again</button>
      </div>
   );
}