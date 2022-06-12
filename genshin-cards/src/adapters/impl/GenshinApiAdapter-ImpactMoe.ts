import axios, { AxiosError } from 'axios';
import { Result, err, ok } from '../../lib/Result';
import { IGenshinCharacterData, IGenshinApiAdapter } from '../GenshinApiAdapter';

type NotFoundError = {
   error: boolean,
   message: string
}

const apiUrlPrefix = (process.env.NODE_ENV === 'production')
   ? `https://impact.moe`
   : ''
;

export class GenshinApiAdapter_ImpactMoe implements IGenshinApiAdapter {
   async getCharacter(id: string): Promise<Result<IGenshinCharacterData, Error>> {
      let res: any;
console.log('getCharacter', apiUrlPrefix);
      try {
         res = await axios.get(`${apiUrlPrefix}/api/characters/${id}`, { headers: {'Accept': 'application/json'} });
console.log('res');
      } catch (e) {
console.log('catch');
         const axiosError = e as AxiosError;
         const notFound = axiosError.response?.data as NotFoundError;
         return err(new Error(`Unknown error ${axiosError.status} - ${notFound.message}`))
      };
console.log('after try/catch');
      if (res.status === 204) {
         return err(new Error(`${id} not found`));
      }
      
      return ok({
            id: res.data.id,
            name: res.data.name,
            weapon: res.data.weapon,
            element: res.data.element,
            region: res.data.region,
            description: res.data.description,
            imageUrl: res.data.squareCard,
            faction: res.data.faction || ''
         } as IGenshinCharacterData
      );
   }
};