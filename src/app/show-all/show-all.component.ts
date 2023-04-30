import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css']
})
export class ShowAllComponent implements OnInit {

  people: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPeople().then(
      people => {
        this.people = people;
      },
      error => {
        console.error(error);
      }
    );
  }

}
