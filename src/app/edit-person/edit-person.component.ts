import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServersService } from '../server/servers.service';
import { Location } from '@angular/common';

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
    public dialogRef: MatDialogRef<EditPersonComponent>,
    private location: Location
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

    if (target.files && target.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.person.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
  onDelete(): void {
    this.serversService.deletePerson(this.person.id).subscribe(() => {
      this.dialogRef.close({ deleted: true, id: this.person.id });
      window.location.reload();
    });
  }
}
