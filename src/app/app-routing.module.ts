import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { CardDetailsComponent } from './main-view/card-details/card-details.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'main-view', component: MainViewComponent },
  { path: 'diagram-details/:id', component: CardDetailsComponent },
  { path: '**', redirectTo: '/main-view' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
