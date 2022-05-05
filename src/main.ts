import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
var timeout = require('connect-timeout')
async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   app.enableCors()
   app.use(timeout('50s'))
   await app.listen(process.env.PORT||3000);
}
bootstrap();
