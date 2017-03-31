import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTileCoverComponent } from './grid-tile-cover.component';

describe('GridTileCoverComponent', () => {
  let component: GridTileCoverComponent;
  let fixture: ComponentFixture<GridTileCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTileCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTileCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
