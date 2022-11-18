import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { CreateContactDto } from './dto/create-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactService {
  constructor(private manager: EntityManager, private dataSource: DataSource) {}
  create(createContactDto: CreateContactDto) {
    return this.manager.save(Contact, createContactDto);
  }

  findAll() {
    return this.dataSource
      .createQueryBuilder()
      .select('*')
      .from(Contact, 'contact')
      .getRawMany();
  }
}
