import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { CharacterService } from '../../services/character/character.service';
import { CharacterModel } from '../../shared/models/character.model';

@Component({
  selector: 'mc-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit {

  characterList: CharacterModel[] = [];
  characterName: string = '';
  loading = true;
  totalPages: number = 0;
  currentPage: number = 0;
  lastPage: number = 5;

  constructor(
    private service: CharacterService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharactersPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.lastPage = pageNumber + 5;
    this.loading = true;
    this.getCharacters(pageNumber);
  }

  openDetails(id: number) {
    this._router.navigate(['', id]);
  }

  onChangeFilter(name: string) {
    this.characterName = name;
    this.getCharacters();
  }

  pageCounter() {
    const array = [
      this.currentPage,
      this.currentPage++,
      this.currentPage++,
      this.currentPage++,
      this.currentPage++,
    ];
    return array;
  }

  private getCharacters(pageNumber = 0) {
    this.service.getCharacterList(this.characterName, pageNumber)
      .subscribe(({ results: list, total }) => {
        this.loading = false;
        this.characterList = list;

        if (pageNumber > 0) {
          this.totalPages = Math.floor(total / 10);
        }
      });
  }
}
