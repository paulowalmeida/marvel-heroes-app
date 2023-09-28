import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from './character-list.component';
import { SearchModule } from './search/search.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { CharacterItemModule } from './character-item/character-item.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [
    CommonModule,
    SearchModule,
    RouterModule,
    LoadingModule,
    CharacterItemModule
  ],
  exports: [CharacterListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CharacterListModule { }
