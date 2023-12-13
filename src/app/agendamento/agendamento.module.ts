import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoFormComponent } from './containers/agendamento-form/agendamento-form.component';
import { AgendamentoListComponent } from './components/agendamento-list/agendamento-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgendamentoRoutingModule } from './agendamento-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AgendamentoFormComponent, AgendamentoListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    AgendamentoRoutingModule,
    SharedModule

  ]
})
export class AgendamentoModule { }
