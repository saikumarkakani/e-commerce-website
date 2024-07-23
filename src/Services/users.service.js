import { read } from "./context.service";


const userURL = "http://localhost:4002/usersData" ;

export function getUser(){
    return read(userURL);
}