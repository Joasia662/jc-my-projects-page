import { Component, OnInit } from '@angular/core';
import { faLaptopCode, faGraduationCap, faAddressBook, faBriefcase} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  icons ={
    faSkills : faLaptopCode,
    faSchool : faGraduationCap,
    faWork : faBriefcase,
    faContact: faAddressBook,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
