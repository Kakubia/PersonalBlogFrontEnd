import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Topic } from '../model/Topic';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllTema(): Observable<Topic[]>{
    return this.http.get<Topic[]>('http//localhost:8080/topic', this.token)
  }

  getByIdTema(id: number): Observable<Topic>{
    return this.http.get<Topic>(`http//localhost:8080/tema/${id}`, this.token)
  }

  postTema(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>('http//localhost:8080/topic', topic, this.token)
  } 

  putTema(topic: Topic): Observable<Topic>{
    return this.http.put<Topic>('http//localhost:8080/tema', topic, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`http//localhost:8080/tema/${id}`, this.token)
  }
}
