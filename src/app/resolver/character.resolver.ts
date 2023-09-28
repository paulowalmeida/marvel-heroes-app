import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

import { CharacterService } from "../services/character/character.service";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver {

  constructor(readonly service: CharacterService) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params['id'];
    return this.service.getCharacterById(id);
  }
}