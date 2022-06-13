import './NumberButton.css';

interface INumberButtonProps {
   number: number,
   buttonStatus: string
   onClick: (num: number, status: string) => void
}

type Dictionary = { [index: string]: string };

const colors: Dictionary = {
   available: 'lightgray',
   used: 'lawngreen',
   wrong: 'lightsalmon',
   selected: 'goldenrod',
};

export const NumberButton = (props: INumberButtonProps) => {
   return (
      <button 
         className="number"
         style={{ backgroundColor: colors[props.buttonStatus] }}
         onClick={() => props.onClick(props.number, props.buttonStatus)}
      >
         {props.number}
      </button>
   );
}