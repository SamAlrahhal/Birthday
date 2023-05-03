import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditPersonComponent } from '../edit-person/edit-person.component';
import { Person } from '../interface/person';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent {

  people: Person[] = [
    {
      image: 'https://via.placeholder.com/150',
      name: 'John Doe',
      birthdate: '01/01/1970',
      phoneNumber: '555-555-5555'
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Jane Doe',
      birthdate: '01/01/1980',
      phoneNumber: '555-555-5555'
    },
    {
      image: 'https://via.placeholder.com/150',
      name: 'Bob Smith',
      birthdate: '01/01/1990',
      phoneNumber: '555-555-5555'
    }
  ];

  constructor(private dialog: MatDialog) { }

  openEditDialog(person: Person): void {
    const dialogRef = this.dialog.open(EditPersonComponent, {
      width: '500px',
      data: person
    });
  }

}
