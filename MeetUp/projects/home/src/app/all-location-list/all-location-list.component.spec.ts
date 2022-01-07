import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLocationListComponent } from './all-location-list.component';

describe('AllLocationListComponent', () => {
  let component: AllLocationListComponent;
  let fixture: ComponentFixture<AllLocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLocationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
