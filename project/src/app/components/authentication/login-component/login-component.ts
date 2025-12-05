import { Component } from '@angular/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatAnchor } from "@angular/material/button";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login-component',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {

}
