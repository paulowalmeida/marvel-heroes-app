import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterItemComponent } from './character-item.component';

describe(`${CharacterItemComponent.name}`, () => {
  let component: CharacterItemComponent;
  let fixture: ComponentFixture<CharacterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
