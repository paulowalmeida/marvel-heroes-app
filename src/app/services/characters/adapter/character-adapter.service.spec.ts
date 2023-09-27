import { TestBed } from '@angular/core/testing';

import { CharacterAdapterService } from './character-service-adapter.service';

describe(`${CharacterAdapterService.name}`, () => {
  let service: CharacterAdapterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterAdapterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
