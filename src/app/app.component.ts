import { Component, OnInit } from '@angular/core';
import { ServersService } from './server/servers.service';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  people: any[] = [];
  birthdaysToday: any[] = [];
  birthdaysThisWeek: any[] = [];
  birthdaysThisMonth: any[] = [];

  constructor(private serversService: ServersService, private router: Router) {} // Inject the Router

  ngOnInit() {
    this.serversService.getPeople().subscribe((data) => {
      this.people = data;
      this.categorizeBirthdays();
    });
  }

  categorizeBirthdays() {
    const today = new Date();
    const oneWeekLater = new Date();
    oneWeekLater.setDate(today.getDate() + 7);

    this.people.forEach((person) => {
      const birthdate = new Date(person.birthdate);
      const currentYearBirthday = new Date(
        today.getFullYear(),
        birthdate.getMonth(),
        birthdate.getDate()
      );

      if (currentYearBirthday.toDateString() === today.toDateString()) {
        this.birthdaysToday.push(person);
      } else if (
        currentYearBirthday >= today &&
        currentYearBirthday <= oneWeekLater
      ) {
        this.birthdaysThisWeek.push(person);
      } else if (currentYearBirthday.getMonth() === today.getMonth()) {
        this.birthdaysThisMonth.push(person);
      }
    });

    console.log(this.router.url);
  }

  // Create a helper method to check if you're not on certain routes
  shouldShowBirthdays(): boolean {
    return !['/show-all', '/add-person'].includes(this.router.url);
  }
}
