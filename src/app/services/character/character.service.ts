import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { ResponseModel, ResponseDataModel } from '../../shared/models/response.model';
import { CharacterModel } from '../../shared/models/character.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) { }

  getCharacterList(page = 0): Observable<ResponseDataModel<CharacterModel>> {
    return this.http
      .get<ResponseModel<CharacterModel>>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
        },
      }).
      pipe(
        map(({ data }) => {
          return data;
        })
      );
  }

  filterCharacterByName(name: string, page: number = 0): Observable<ResponseDataModel<CharacterModel>> {
    return this.http
      .get<ResponseModel<CharacterModel>>(`${API_URL}/characters`, {
        params: {
          limit: 10,
          offset: page * 10,
          nameStartsWith: name,
        },
      })
      .pipe(
        map(({data}) => {
          return data;
        })
      );
  }

  getCharacterById(id: number): Observable<ResponseDataModel<CharacterModel>> {
    return this.http
      .get<ResponseModel<CharacterModel>>(`${API_URL}/characters/${id}`)
      .pipe(
        map(({data}) => {
          return data;
        })
      );
  }

  getEvents(resourceUrl: string): Observable<ResponseDataModel<string[]>> {
    return this.http.get<ResponseModel<any>>(resourceUrl).pipe(
      map(({data}) => {
        return data;
      })
    );
  }

  getSeries(resourceUrl: string): Observable<ResponseDataModel<string[]>> {
    return this.http.get<ResponseModel<any>>(resourceUrl).pipe(
      map(({data}) => {
        return data;
      })
    );
  }
}
