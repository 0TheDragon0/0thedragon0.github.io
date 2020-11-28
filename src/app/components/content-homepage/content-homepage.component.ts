import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-homepage',
  templateUrl: './content-homepage.component.html',
  styleUrls: ['./content-homepage.component.less']
})
export class ContentHomepageComponent implements OnInit {

  constructor(
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  contribute() {
    console.log("Contribute");
    this.router.navigate(['/', 'contribute']);
  }

  browse() {
    console.log("Browse Content");
    this.router.navigate(['/', 'browse-content']);
  }
}