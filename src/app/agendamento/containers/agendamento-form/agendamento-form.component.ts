import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.scss'],
})
export class AgendamentoFormComponent implements OnInit {

  public formAgendamento: FormGroup;
  public date_event: any;

  public arrayAgendamento: any[] = [];

  public textoToolbar = 'AGENDAMENTO';

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initGUI();
  }

  private initGUI() {
    this.formAgendamento = this.fb.group({

      nome: [''],
      endereco: [''],
      numero: [''],
      complemento: [''],
      bairro: [''],
      telefone: [''],
      data: [''],
      observacao: [''],
      procedimento: ['']
    })
  }

  datePick() {
    const date = moment(this.date_event.substring(0, 10)).format('DD/MM/YYYY');
    this.date_event = date;
  }

  submit() {

    let objAgendamento = { ...this.formAgendamento.value };

    if (!this.arrayAgendamento.includes(objAgendamento)) {

      this.arrayAgendamento.push(objAgendamento);

      localStorage.setItem("agendamento", JSON.stringify(this.arrayAgendamento));

      this.formAgendamento.reset();

      //  this.router.navigate(['/tabs1'])
    }
  }

  public rotaHome() {
    this.router.navigate(['/home']);
  }

  public rotaListagemAgendamento() {
    this.router.navigate(['/agendamento/agendamento-list']);
  }

}
