import { Body, Controller,Post } from '@nestjs/common';
import { TranslatorService } from './translator.service';
import {TranslateDTO} from './dto/translate'

@Controller('translator')
export class TranslatorController {
    constructor(private readonly translateService: TranslatorService) {}
    @Post()
    translate(@Body() body:TranslateDTO):Promise<any>{
        return this.translateService.translate(body)
    }

}

