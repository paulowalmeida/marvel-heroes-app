import { Component } from '@angular/core';
import { CharacterService } from './services/characters/character.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marvel-heroes-app';

  constructor(private service: CharacterService) { }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes() {
    this.service.getCharacterList().subscribe(characters => {
      console.log(characters);
    });
  }
}
