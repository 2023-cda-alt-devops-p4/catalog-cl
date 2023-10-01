import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardDetailsComponent } from './components/main-view/card-details/card-details.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { MeriseListComponent } from './components/main-view/merise-list/merise-list.component';
import { UmlListComponent } from './components/main-view/uml-list/uml-list.component';
import { FourOhFourComponent } from './components/main-view/four-oh-four/four-oh-four.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main-view', component: MainViewComponent },
  { path: 'merise', component: MeriseListComponent },
  { path: 'uml', component: UmlListComponent },
  { path: 'diagram-details/:id', component: CardDetailsComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
