import React from 'react';

interface INumberButtonProps {
   number: number
}

export const NumberButton = (props: INumberButtonProps) => {
   return (
      <button className="number" onClick={() => console.log('Num', props.number)}>
         {props.number}
      </button>
   );
}