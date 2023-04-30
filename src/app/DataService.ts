import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getPeople(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      this.http.get('assets/people.csv', { responseType: 'text' }).subscribe(
        data => {
          const people = this.csvToArray(data);
          resolve(people);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  csvToArray(text: string): any[] {
    const rows = text.split('\n');
    const result = [];

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].split(',');
      if (cells.length !== 4) {
        continue;
      }
      const person = {
        image: cells[0].trim(),
        name: cells[1].trim(),
        birthdate: cells[2].trim(),
        phone: cells[3].trim()
      };
      result.push(person);
    }

    return result;
  }

}
