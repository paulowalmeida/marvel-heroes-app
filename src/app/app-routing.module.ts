import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './characters/character-details/character-details.component';
import { CharacterResolver } from './resolver/character.resolver';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent,
  },
  {
    path: ':id',
    component: CharacterDetailsComponent,
    resolve: {
      character: CharacterResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
