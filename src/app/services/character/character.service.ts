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

  getCharacterList(name = '', page = 0): Observable<ResponseDataModel<CharacterModel>> {
    let params: any = {
      limit: 10,
      offset: page * 10,
    };

    if (!!name) {
      params = {
        ...params,
        nameStartsWith: name,
      }
    }

    return this.http.get<ResponseModel<CharacterModel>>(`${API_URL}/characters`, { params }).
      pipe(
        map(({ data }) => {
          return data;
        })
      );
  }

  getCharacterById(id: number): Observable<ResponseDataModel<CharacterModel>> {
    return this.http
      .get<ResponseModel<ResponseDataModel<CharacterModel>>>(`${API_URL}/characters/${id}`)
      .pipe(
        map(({ data: {results} }) => {
          console.log(results[0]);
          return results[0];
        })
      );
  }
}
