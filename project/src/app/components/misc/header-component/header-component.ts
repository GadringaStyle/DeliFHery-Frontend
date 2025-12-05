import { Component, OnInit } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header-component',
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent implements OnInit {
  headerMessage: string = "Authentication";
  constructor(private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let child = this.activatedRoute.firstChild;
          while (child?.firstChild) child = child.firstChild;
          return child?.snapshot.data['headerTitle'];
        })
      )
      .subscribe((title) => {
        this.headerMessage = title ?? "";
      })
  }
}
