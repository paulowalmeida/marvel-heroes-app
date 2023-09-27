import { ItemModel } from './item.model';

export interface ListModel {
  available: number;
  collectionURI: string;
  items: ItemModel[];
}
