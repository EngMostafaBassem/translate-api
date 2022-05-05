import { Injectable } from '@nestjs/common';
import { TranslateDTO } from './dto/translate';
const { translate } = require('free-translate');
@Injectable()
export class TranslatorService {
    async translate({from,to,query}:TranslateDTO):Promise<string>{
      //  const response=await translate(query, {from,to});
       const response='here will retreive the translation'
        return response
        
     }
}
