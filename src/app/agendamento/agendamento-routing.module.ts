import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgendamentoFormComponent } from "./containers/agendamento-form/agendamento-form.component";
import { AgendamentoListComponent } from "./components/agendamento-list/agendamento-list.component";

const routes: Routes = [
    {
        path: '',
        component: AgendamentoFormComponent
    },
    {
        path: 'agendamento-list',
        component: AgendamentoListComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgendamentoRoutingModule {

}