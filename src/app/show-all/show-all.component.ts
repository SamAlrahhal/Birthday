import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { Person } from '../interface/person';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
})
export class ShowAllComponent {
  people: any;
  ngOnInit() {
    const data = localStorage.getItem('userData');
    if (data) {
      this.people = JSON.parse(data); // set parsed data to people array
    }
  }

  constructor(private dialog: MatDialog) {}

  openEditDialog(person: Person): void {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '500px',
      data: person,
    });
  }
}
