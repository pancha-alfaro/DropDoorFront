//Se importa el decorador 'Injectable" que marca esta clase como un "Injectable service" (funcionalidad que puede ser compartida a travez de multiples componentes)
import { Injectable } from '@angular/core';
//HttpClient nos deja hacer http requests
import { HttpClient } from '@angular/common/http';
//Se importa la interface de User (model)
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})

//define la clase BackendService para poder importarlos en otros componentes.
export class BackendService {

  constructor(private http: HttpClient) {
    this.user = [];
  }

  selectedUser: User = {
    name: '',
    email: '',
    password: '',
    cellphone: 0,
    address: '',
    _id: ''
  }
  
  URL_API =  'http://localhost:4000/api/users'

  user: User[];
  

  getAllUsers() {
    return this.http.get(this.URL_API);
  }

  createUser(user: User){
    return this.http.post(this.URL_API, user)
  }

  deleteUser(id: string){
    return this.http.delete(`${this.URL_API}/${id}`)
  }

  updateUser(user: User){
    return this.http.put(`${this.URL_API}/${user._id}`, user);
  }

}

