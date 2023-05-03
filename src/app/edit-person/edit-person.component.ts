import { Component } from '@angular/core';
import { NgxCsvParser } from 'ngx-csv-parser';
import { NgxCSVParserError } from 'ngx-csv-parser';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent {
  name: any;
  image: any;
  birthdate: any;
  phone: any;
  constructor(private ngxCsvParser: NgxCsvParser) { }

  onSubmit() {
 const data = [
      { name: this.name, birthdate: this.birthdate, phone: this.phone, image: this.image }
    ];

  // const csv = this.formatDataAsCSV(data);
  // const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  // saveAs(blob, 'people.csv');

    this.exportToCsv('people.csv', data);


 }
  formatDataAsCSV(data: { name: any; birthdate: any; phone: any; image: any; }[]) {
  const csvHeader = ['Image', 'Name', 'Birthdate', 'Phone'];
  const csvData = data.map(item => [item.image, item.name, item.birthdate, item.phone]);
  const csv = [csvHeader, ...csvData].join('\n');
  return csv; // Add this line to return the CSV string
  }

exportToCsv(filename: string, rows: any[]) {
   const separator = ',';
  const keys = Object.keys(rows[0]);

  // Build the CSV string
  let csv = keys.join(separator) + '\n';
  for (let row of rows) {
    csv += keys.map(key => row[key]).join(separator) + '\n';
  }

  // Create a Blob with the CSV data
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });

  // Save the file using FileSaver.js
  saveAs(blob, filename);
}


}
