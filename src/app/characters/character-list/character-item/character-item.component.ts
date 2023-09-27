import { Component, Input } from '@angular/core';

import { CharacterModel } from '../../../shared/models/character.model';

@Component({
  selector: '[mc-character-item]',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.scss'],
})
export class CharacterItemComponent {
  @Input() character: CharacterModel = <CharacterModel>{};
}
