import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterAdapterService {

  constructor() { }

  adaptHeroes(heroes: any[]) {
    console.log(heroes);
    return heroes.map(({ id, name, description, thumbnail, series, events }) => {
      return {
        id,
        name,
        description,
        thumbnail: thumbnail.path + thumbnail.extension,
        series: this.listHandler(series.items),
        events: this.listHandler(events.items)
      }
    })
  }

  private listHandler(list: any) {
    return list.map((item: any) => item.name);
  }
}
