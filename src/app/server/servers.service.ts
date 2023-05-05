import { HttpClient } from '@angular/common/http';
import { Server } from './server.module';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ServersService {
  constructor(private http: HttpClient) {}

  getServers(): Observable<Server[]> {
    const url = 'https://localhost:3000/servers';
    return this.http.get<Server[]>(url);
  }

  public addServer(server: Server): Observable<Server> {
    const url = 'https://localhost:3000/servers';
    return this.http.post<Server>(url, server);
  }
}
