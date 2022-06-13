import './ResetGame.css';

interface IResetButtonProps {
   onClick: () => void
}

export const ResetButton = (props: IResetButtonProps) => {
   return (
      <div className="game-over">
         <button onClick={props.onClick}>Play Again</button>
      </div>
   );
}