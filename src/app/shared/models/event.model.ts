import { CharacterModel } from './character.model';
import { SeriesModel } from './series.model';
import { ThumbnailModel } from './thumbnail.model';

export interface EventModel {
  id: number;
  title: string;
  description: string;
  resourceURI: string;
  start: Date;
  end: Date;
  thumbnail: ThumbnailModel;
  series: SeriesModel[];
  characters: CharacterModel[];
}
