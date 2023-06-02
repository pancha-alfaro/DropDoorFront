import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})

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

