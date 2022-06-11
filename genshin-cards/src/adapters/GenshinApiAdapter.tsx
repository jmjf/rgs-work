import { Result } from '../lib/Result'

export interface IGenshinCharacterData {
   id: string | number,
   name: string,
   weapon: string,
   element: string,
   region: string,
   description: string,
   imageUrl: string,
   faction?: string,
};

export interface IGenshinApiAdapter {
   getCharacter(id: string): Promise<Result<IGenshinCharacterData, Error>>;
}