import { Component } from '@angular/core';
//import { Person } from '../interface/person';
import { Person } from '../person.model';
import { ServersService } from '../server/servers.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css'],
})
export class AddPersonComponent {
  image!: string;
  name!: string;
  birthdate!: string;
  phone!: string;

  constructor(private serversService: ServersService) {}

  onSubmit() {
    const newPerson: Person = {
      image: this.image,
      name: this.name,
      birthdate: this.birthdate,
      phone: this.phone,
    };

    this.serversService.addPerson(newPerson).subscribe({
      next: (response: any) => {
        console.log('Person added: ', response);
      },
      error: (error: any) => {
        console.log('Error occurred: ', error);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
