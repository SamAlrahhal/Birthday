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
        newPerson.birthdate = '';
        newPerson.image = '';
        newPerson.name = '';
        newPerson.phone = '';
      },
      error: (error: any) => {
        console.log('Error occurred: ', error);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
  changeImage(event: Event): void {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files[0]) {
      const file = target.files[0];

      const reader = new FileReader();

      reader.onload = () => {
        this.image = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
