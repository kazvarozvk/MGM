import { CosmosPartitionKey } from "@nestjs/azure-database";

@CosmosPartitionKey("make")

export class User{

    id: string;
    email: string;
    password: string;
    type: string;
    creation_date: string;
    name: string;

}