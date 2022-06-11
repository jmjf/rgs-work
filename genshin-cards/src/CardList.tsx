import React from 'react';
import { CharacterCard } from './CharacterCard'

export interface CardListProps {
   data: any[]
};

export const CardList = (props: CardListProps) => {
   console.log(props);
   return (
      <div>
         {props.data.map((p) => { return (<CharacterCard {...p.payload.character} />); })}
      </div>
   )
}