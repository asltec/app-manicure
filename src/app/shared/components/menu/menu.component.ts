import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Output() agendamento = new EventEmitter();
  @Output() home = new EventEmitter();
  @Output() lista_agendamento = new EventEmitter();
  @Input() textoToolbar: string;

  constructor() { }

  ngOnInit() { }

}
