import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  @Input() person: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  isShowAllRoute() {
    return this.router.url === '/show-all';
  }
}
