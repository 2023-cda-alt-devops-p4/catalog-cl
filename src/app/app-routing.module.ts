import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './components/main-view/card-details/card-details.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MeriseListComponent } from './components/main-view/merise-list/merise-list.component';
import { UmlListComponent } from './components/main-view/uml-list/uml-list.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main-view', component: MainViewComponent },
  { path: 'merise', component: MeriseListComponent },
  { path: 'uml', component: UmlListComponent },
  { path: 'diagram-details/:id', component: CardDetailsComponent },
  { path: '**', redirectTo: '/main-view' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
