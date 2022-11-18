import { NestFactory } from '@nestjs/core';
import { ContactModule } from './contact/contact.module';

async function bootstrap() {
  const app = await NestFactory.create(ContactModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
