import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardDetailsComponent } from './components/main-view/card-details/card-details.component';
import { CardComponent } from './components/main-view/cards-list/card/card.component';
import { CardsListComponent } from './components/main-view/cards-list/cards-list.component';
import { MainViewComponent } from './components/main-view/main-view.component';
import { SearchBarComponent } from './components/main-view/search-bar/search-bar.component';
import { NavigationComponent } from './components/navigation/navigation.component';

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
