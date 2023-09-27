import { ListModel } from "./collection.model";
import { ThumbnailModel } from "./thumbnail.model";
import { UrlModel } from "./url.model";

export interface CharacterModel {
  id: number;
  name: string;
  description: string;
  modified: Date;
  thumbnail: ThumbnailModel;
  resourceURI: string;
  events: ListModel;
  series: ListModel;
  urls: UrlModel[];
}
