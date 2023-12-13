import { Component, OnInit } from '@angular/core';
import { Agendamento } from '../../models/agendamento.model';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.scss'],
})
export class AgendamentoListComponent implements OnInit {

  public arrayAgendamento: Agendamento[];

  constructor() { }

  ngOnInit() {
    this.getAgendamento();
  }

  private getAgendamento() {

    const agemdamento = JSON.parse(localStorage.getItem("agendamento") || '{}');

    if (Agendamento.length >= 0) {
      this.arrayAgendamento = agemdamento;
    }
  }

}
