import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public home: 'HOME';

  constructor(private router: Router) {}


  public rotaAgendamento(){
    this.router.navigate(['/agendamento'])
  }

}
