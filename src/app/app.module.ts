import { NgModule }      from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PokemonsModule } from './pokemons/pokemon.module';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './page-not-found.componenent';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // Le module HttpClientInMemoryWebApiModule intercepte les requêtes HTTP
    // et retourne des réponses simulées du serveur.
    // Retirer l'importation quand un "vrai" serveur est prêt à recevoir des requêtes
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PokemonsModule,
    LoginRoutingModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  providers: [ 
    Title // on fournis le service 'Title' à l'ensemble de l'application 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }