import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-landingPage',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './landing_page.component.html',
  styleUrls: ['./landing_page.components.scss']
})
export class LandingPageComponent { }