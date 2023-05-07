import { HttpClient } from '@angular/common/http';
import { Server } from './server.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Person } from '../person.model';

@Injectable()
export class ServersService {
  constructor(private http: HttpClient) {}

  getServers(): Observable<Server[]> {
    const url = 'http://localhost:3000/servers';
    return this.http.get<Server[]>(url);
  }

  public addServer(server: Server): Observable<Server> {
    const url = 'https://localhost:3000/servers';
    return this.http.post<Server>(url, server);
  }

  public deleteServer(id: number): Observable<Server> {
    const url = 'https://localhost:3000/servers/' + id;
    return this.http.delete<Server>(url);
  }

  public updateServer(server: Server): Observable<Server> {
    const url = 'https://localhost:3000/servers/' + server.id;
    return this.http.put<Server>(url, server);
  }
  public addPerson(person: Person): Observable<Person> {
    const url = 'http://localhost:3000/person';
    return this.http.post<Person>(url, person);
  }
  public getPeople(): Observable<any[]> {
    const url = 'http://localhost:3000/person';
    return this.http.get<any[]>(url);
  }
}
