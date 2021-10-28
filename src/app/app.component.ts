import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'; // on importe le service 'Title'
  
@Component({
  selector: 'pokemon-app',
  templateUrl: `./app/app.component.html`
})
export class AppComponent implements OnInit {
  public constructor(private titleService: Title) {}
  
  ngOnInit() {
    this.titleService.setTitle("Angular Pokémon");  
  }

}