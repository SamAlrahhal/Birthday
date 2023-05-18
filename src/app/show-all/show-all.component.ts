import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { ServersService } from '../server/servers.service';
import { Person } from '../person.model';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent implements OnInit {
  people: any[] = [];
  dialogRef: MatDialogRef<EditPersonComponent> | undefined;

  constructor(
    public dialog: MatDialog,
    private serversService: ServersService
  ) {}

  ngOnInit(): void {
    this.getPeople();
  }

  getPeople(): void {
    this.serversService.getPeople().subscribe((people: any[]) => {
      this.people = people;
    });
  }

  openEditDialog(person: Person): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }

    this.dialogRef = this.dialog.open(EditPersonComponent, {
      width: '600px',
      height: '400px',
      data: { ...person },
      panelClass: 'editDialog',
    });

    this.dialogRef.afterClosed().subscribe((updatedPerson: Person) => {
      if (updatedPerson) {
        this.serversService.updatePerson(updatedPerson).subscribe(() => {
          const index = this.people.findIndex((p) => p.id === updatedPerson.id);
          if (index !== -1) {
            this.people[index] = updatedPerson;
          }
        });
      }
    });
  }
}
