import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
constructor(private readonly userService:UserService){}

@Get()
get_data():string{

return this.userService.hello() ;

}
//new change in controller

// @Get(':id')
// get_items_byId(@Param('id') id:string){
//     return this.userService.find_one(id);

}


// @Post()      
// create(@Body() user:any):any{
//     return userInfo;

// }


// @Delete(':id')
// Delete(@Param('id') id:string){
//     return {id} ;
// }