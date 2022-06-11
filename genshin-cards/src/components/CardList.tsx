import { CharacterCard } from './CharacterCard';

export interface CardListProps {
   data: any[]
};

export const CardList = (props: CardListProps) => {
   return (
      <div>
         {props.data.map((p) => { return (<CharacterCard {...p.payload.character} key={p.payload.character.name} />); })}
      </div>
   );
}