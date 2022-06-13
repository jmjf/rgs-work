import React from 'react';

interface INumberButtonProps {
   number: number,
   buttonStatus: string
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
         onClick={() => console.log('Num', props.number)}
      >
         {props.number}
      </button>
   );
}