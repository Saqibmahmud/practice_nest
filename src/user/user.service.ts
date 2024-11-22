import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class UserService {
users=[{id:1,name:"saqib",salary:29999},{id:2,name:"tawsif",salary:39999},{id:3,name:"tatto",salary:49999}]





hello():string{
    return"Hello user" ;
}
new_accnt( name:string){
    return `hello ${name}` ;
}
find_one(id:number){ 
   const user=this.users.find((user)=>{user.id===id})
   return user;
    
}
}
interface User{
    name:String;
    salary:number
}
let users1:User={
   name:"saqib",
salary:556566}

