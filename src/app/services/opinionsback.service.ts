import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Opinion } from '../models/opinions';

@Injectable({
  providedIn: 'root'
})

export class OpinionsbackService {

  constructor(private http: HttpClient) {
    this.opinion = [];
  }

  selectedOpinion: Opinion = {
    name: '',
    input: '',
    _id: ''
  }
  
  URL_API =  'http://localhost:5000/api/opinions'

  opinion: Opinion[];
  

  getAllOpinions() {
    return this.http.get(this.URL_API);
  }

  createOpinion(opinion: Opinion){
    return this.http.post(this.URL_API, opinion)
  }

  deleteOpinion(id: string){
    return this.http.delete(`${this.URL_API}/${id}`)
  }

  updateOpinion(opinion: Opinion){
    return this.http.put(`${this.URL_API}/${opinion._id}`, opinion);
  }

}
