import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterItemComponent } from './character-item.component';

@NgModule({
  declarations: [CharacterItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CharacterItemComponent]
})
export class CharacterItemModule { }
