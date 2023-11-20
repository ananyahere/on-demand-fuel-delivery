import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  constructor(private router: Router){}

  toSignin(){
    this.router.navigate(['/signin'])
  }

  toSignup(){
    this.router.navigate(['/signup'])
  }

}
