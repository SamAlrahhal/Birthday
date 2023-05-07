import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.person = { ...data };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    // Handle form submission here
  }
}
