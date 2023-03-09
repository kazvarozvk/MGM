import { Module } from '@nestjs/common';
import { AzureCosmosDbModule } from '@nestjs/azure-database';
import { UserController } from './user.controller';
import { User } from "./user.entity";

@Module({

    imports: [
        AzureCosmosDbModule.forRoot({
            dbName:"MGMDB",
            endpoint:"https://mgm.documents.azure.com:443/",
            key: "<Jz8XSojmBC6JOZVoNtobqJgiKrZU0mICZz0g1t6OoHVHufgxa2NEYAkzg2u2evCCmHwnANNiNw0gACDbSKdcTA==>"
          }),
        AzureCosmosDbModule.forFeature([{ collection: 'user', dto: User }])],
    controllers: [UserController]
})
export class UserModule {}
