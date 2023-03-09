import { Controller } from '@nestjs/common';
import { Container } from '@azure/cosmos';
import { InjectModel } from '@nestjs/azure-database';
import { User } from "./user.entity";
import { Body, Get, Post } from '@nestjs/common';
import { IUserDto } from './user.dto';


@Controller('user')
export class UserController {
    constructor(@InjectModel(User) private readonly userContainer: Container) { }

    @Get('all')
    async getUsers() {
        var sqlQuery = 'select * from c';

        var consmosResults = await this.userContainer?.items
            ?.query<User>(sqlQuery)
            .fetchAll();
        var fanal = consmosResults.resources.map<IUserDto>((value) => {
            return {
                id: value.id,
                email: value.email,
                password: value.password,
                type: value.type,
                creation_date: value.creation_date,
                name: value.name,
            };
        });
        return fanal;
    }
    @Post('create')
    async create(@Body() payload: IUserDto) {
        var newUser = new User();
        newUser.id = '2';
        newUser.email = 'test@gmail.com';
        newUser.password = 'test';
        newUser.type = 'personal';
        newUser.creation_date = '9-3-2023';
        newUser.name = 'admin';

        var { resource } = await this.userContainer.items.create(newUser);
        return {
            id: resource.id,
            email: resource.email,
            password: resource.password,
            type: resource.type,
            creation_date: resource.creation_date,
            name: resource.name,

        };
    }
}
