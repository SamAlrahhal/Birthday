import { Component, OnInit } from '@angular/core';
import { Server } from './server.module';
import { ServersService } from './servers.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  servers: Server[] = [];

  constructor(public serversService: ServersService) {}

  ngOnInit(): void {
    this.serversService.getServers().subscribe((servers: Server[]) => {
      this.servers = servers;
    });
  }

  getServers(): void {
    this.serversService.getServers().subscribe({
      next: (response: Server[]) => {
        console.log('servers recieved: ', response);
        this.servers = response;
      },
      error: (error: any) => {
        console.log('error occured: ', error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  onAddServer(): void {
    const newServer: Server = new Server();
    newServer.id = this.servers.length + 1;
    newServer.name = 'New Server';
    newServer.status = 'online';
    this.serversService.addServer(newServer).subscribe({
      next: (response: any) => {
        console.log('server added: ', response);
        this.servers.push(response);
      },
      error: (error: any) => {
        console.log('error occured: ', error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }

  onUpdateServer(server: Server): void {
    this.serversService.updateServer(server).subscribe({
      next: (response: any) => {
        console.log('server updated: ', response);
        const index = this.servers.findIndex((s) => s.id === server.id);
        this.servers[index] = server;
      },
      error: (error: any) => {
        console.log('error occured: ', error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
  onDeleteServer(server: Server): void {
    this.serversService.deleteServer(server.id).subscribe({
      next: (response: any) => {
        console.log('server deleted: ', response);
        const index = this.servers.findIndex((s) => s.id === server.id);
        this.servers.splice(index, 1);
      },
      error: (error: any) => {
        console.log('error occured: ', error);
      },
      complete: () => {
        console.log('completed');
      },
    });
  }
}
