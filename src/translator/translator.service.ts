import { Injectable } from '@nestjs/common';
import { TranslateDTO } from './dto/translate';

const translate = require('@vitalets/google-translate-api');
@Injectable()
export class TranslatorService {
    async translate({from,to,query}:TranslateDTO):Promise<string>{
        const translatedText=await translate(query, { from,to})
       return  translatedText.text
     }
}
