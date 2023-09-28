import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterModel } from '../../shared/models/character.model';
import { EventModel } from '../../shared/models/event.model';
import { SeriesModel } from '../../shared/models/series.model';

@Component({
  selector: 'marvel-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss'],
})
export class CharacterDetailsComponent implements OnInit {
  character: CharacterModel = <CharacterModel>{};
  isSeriesExpanded = false;
  isEventsExpanded = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.character = this.route.snapshot.data['character'];
    console.log(this.character);
  }

  buildAvatar() {
    return this.character.thumbnail.path + '.' + this.character.thumbnail.extension;
  }
}
