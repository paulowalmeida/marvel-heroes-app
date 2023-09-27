import { CharacterModel } from './character.model';
import { EventModel } from './event.model';
import { ThumbnailModel } from './thumbnail.model';

export interface SeriesModel {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  startYear: number;
  endYear: number;
  rating: string;
  thumbnail: ThumbnailModel;
  events: EventModel[];
  characters: CharacterModel[];
}
