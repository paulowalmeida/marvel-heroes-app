import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './character-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CharacterDetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CharacterDetailsComponent]
})
export class CharacterDetailsModule { }
