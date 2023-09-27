import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { MarvelResponse, MarvelResponseData } from '../../shared/models/marvel-response.model';
import { CharacterModel } from '../../shared/models/character.model';
import { CharacterAdapterService } from './adapter/character-service-adapter.service';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(
    private http: HttpClient,
    private adapterService: CharacterAdapterService
  ) {}

  getCharacterList(page: number = 0): Observable<any> {
    return this.http
      .get<any>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
        },
      })
      .pipe(
        map((res) => {
          return this.adapterService.adaptHeroes(res.data.results)
        })
      );
  }

  getCharacterListByName(
    name: string,
    page: number = 0
  ): Observable<MarvelResponseData<CharacterModel>> {
    return this.http
      .get<MarvelResponse<CharacterModel>>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
          nameStartsWith: name,
        },
      })
      .pipe(
        map((res) => {
          console.log(res);
          return res.data;
        })
      );
  }

  getCharacterById(
    characterId: number
  ): Observable<MarvelResponseData<CharacterModel>> {
    return this.http
      .get<MarvelResponse<CharacterModel>>(`${API_URL}/characters/${characterId}`)
      .pipe(
        map((res) => {
          console.log(res);
          return res.data;
        })
      );
  }

  getEvents(
    resourceURI: string
  ): Observable<MarvelResponseData<string[]>> {
    return this.http.get<MarvelResponse<any>>(resourceURI).pipe(
      map((res) => {
        console.log(res);
        return res.data;
      })
    );
  }
  getSeries(resourceURI: string): Observable<MarvelResponseData<string[]>> {
    return this.http.get<MarvelResponse<any>>(resourceURI).pipe(
      map((res) => {
        console.log(res);
        return res.data;
      })
    );
  }
}
