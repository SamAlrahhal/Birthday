import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServersService } from '../server/servers.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css'],
})
export class EditPersonComponent implements OnInit {
  person: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private serversService: ServersService,
    public dialogRef: MatDialogRef<EditPersonComponent>
  ) {
    this.person = { ...data };
  }
  ngOnInit(): void {}

  onSubmit(): void {
    this.serversService.updatePerson(this.person).subscribe(() => {
      this.dialogRef.close(this.person);
    });
  }

  onFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length) {
      const file = target.files[0];
      // You can handle the file object here, e.g., upload it to the server, display it, etc.
      // For now, we just store it in the person object.
      this.person.image = file;
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
