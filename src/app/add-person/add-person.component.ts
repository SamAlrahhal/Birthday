import { Component } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent {
  name: any;
  image: any;
  birthdate: any;
  phone: any;
  constructor(private ngxCsvParser: NgxCsvParser) { }
  file: any;

  onSubmit() {
 const data = [
      { Name: this.name, Birthdate: this.birthdate, Phone: this.phone, Image: this.image }
    ];

    // const replacer = (key, value) => value === null ? '' : value; // specify how you want to handle null values here
    // const header = Object.keys(data[0]);
    // let csv = data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','));
    // csv.unshift(header.join(','));
    // let csvArray = csv.join('\r\n');

    // var blob = new Blob([csvArray], {type: 'text/csv' })
    // saveAs(blob, "myFile.csv");


 }
}
