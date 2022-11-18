import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgrescontacts',
      port: 5432,
      username: 'dev_admin',
      password: 'secret',
      database: 'contactsdb',
      entities: [Contact],
      synchronize: true,
    }),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
