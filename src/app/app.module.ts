import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CardComponent } from './main-view/cards-list/card/card.component';
import { MainViewComponent } from './main-view/main-view.component';
import { CardsListComponent } from './main-view/cards-list/cards-list.component';
import { SearchBarComponent } from './main-view/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { CardDetailsComponent } from './main-view/card-details/card-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CardComponent,
    MainViewComponent,
    CardsListComponent,
    SearchBarComponent,
    CardDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
