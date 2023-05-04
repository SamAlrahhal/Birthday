import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArrayDataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  image!: string;
  name!: string;
  birthdate!: string;
  phone!: string;

  onSubmit() {
    const data = {
      image: this.image,
      name: this.name,
      birthdate: this.birthdate,
      phone: this.phone
    };
    const jsonData = JSON.stringify(data);
    localStorage.setItem("userData", JSON.stringify(jsonData));


  }
}
