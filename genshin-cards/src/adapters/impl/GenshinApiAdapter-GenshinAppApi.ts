import axios, { AxiosError } from 'axios';
import { Result, err, ok } from '../../lib/Result';
import { IGenshinCharacterData, IGenshinApiAdapter } from '../GenshinApiAdapter';

type NotFoundError = {
   error: boolean,
   message: string
}

export class GenshinApiAdapter_GenshinAppApi implements IGenshinApiAdapter {
   async getCharacter(id: string): Promise<Result<IGenshinCharacterData, Error>> {
      let res: any;

      try {
         res = await axios.get(`https://genshin-app-api.herokuapp.com/api/characters/info/${id}?infoDataSize=minimal`);
      } catch (e) {
         const axiosError = e as AxiosError;

         if (axiosError.response?.status === 404) {
            return err(new Error(`Not found - ${id}`));
         } else {
            const notFound = axiosError.response?.data as NotFoundError;
            return err(new Error(`Unknown error ${axiosError.status} - ${notFound.message}`))
         }
      };

      if (res.data.error === true) {
         return err(new Error(`Api Error: ${res.data.message}`));
      }
      
      return ok({
            id: res.data.payload.character._id,
            name: res.data.payload.character.name,
            weapon: res.data.payload.character.weaponType,
            element: res.data.payload.character.element,
            region: res.data.payload.character.nation,
            description: res.data.payload.character.description,
            imageUrl: res.data.payload.character.iconURL,
            faction: res.data.payload.character.affiliation || ''
         } as IGenshinCharacterData
      );
   }
};