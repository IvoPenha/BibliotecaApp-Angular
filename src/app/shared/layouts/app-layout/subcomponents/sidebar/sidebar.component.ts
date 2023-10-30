import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { faBookOpen, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  faBookOpen = faBookOpen;
  faUsers = faUsers;

  constructor(private router: Router) {
  }

  get username(): string {
    return ('oi')

  }

  logout(): void {

  }
}
