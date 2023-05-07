import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { ServersService } from '../server/servers.service';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent implements OnInit {
  people: any[] = [];

  constructor(
    public dialog: MatDialog,
    private serversService: ServersService
  ) {}

  ngOnInit(): void {
    this.serversService.getPeople().subscribe((people: any[]) => {
      this.people = people;
    });
  }

  openEditDialog(person: any): void {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '450px',
      data: person,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      // Update the person data in the list
    });
  }
}
