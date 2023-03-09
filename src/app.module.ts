import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AzureCosmosDbModule.forRoot({
      dbName:"MGMDB",
      endpoint:"https://ffcbd776-0ee0-4-231-b9ee.documents.azure.com:443/",
      key: "<bDdK003WUcpZFD9S10WV3umGgsBHpgNAKwdyY9kegjjZknLtFvfSbsYE5n2DQpPXkq57q4GOAF1XACDbJ0RufA==>"
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
