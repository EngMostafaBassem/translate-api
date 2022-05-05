import { Injectable } from '@nestjs/common';
import { TranslateDTO } from './dto/translate';
import {translate} from 'free-translate'
@Injectable()
export class TranslatorService {
    async translate({from,to,query}:TranslateDTO):Promise<string>{
       return translate(query, {from:'ar',to:'de'});    
     }
}
