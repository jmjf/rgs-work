import { GameMath } from '../utils/GameMath';

interface IIconPanelProps {
   iconCount: number
}

export const IconPanel = (props: IIconPanelProps) => {
   return (
      <>
         {GameMath.arrayRange(1, props.iconCount).map(id => {
            return (<div key={id} className="ico" />);
         })}
      </>
   );
};