import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class navbarComponent {
  logoText: string = "Dhruvit";
  links = [
    { name: 'FIND JOBS', url: '/jobs', blnExact: false },
    { name: 'HOME', url: '/', blnExact: true }
  ];
  constructor(private router: Router) {

  }
  isLinkActive(url): boolean {
    const queryParamsIndex = this.router.url.indexOf('?');
    const baseUrl = queryParamsIndex === -1 ? this.router.url :
      this.router.url.slice(0, queryParamsIndex);
    return baseUrl === url;
  }
}
