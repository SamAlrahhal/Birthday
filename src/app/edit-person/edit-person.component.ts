import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServersService } from '../server/servers.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  ServersService: any;
  dialogRef!: MatDialogRef<EditPersonComponent>;
  person: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.person = { ...data };
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.ServersService.updatePerson(this.data).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
