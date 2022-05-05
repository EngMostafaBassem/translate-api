import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';

import { TranslatorController } from './translator.controller';
import { TranslatorService } from './translator.service';

@Module({
  imports:[ 
    BullModule.registerQueue({
    name: 'translator',
  })],
  controllers: [TranslatorController],
  providers: [TranslatorService]
})
export class TranslatorModule {}
