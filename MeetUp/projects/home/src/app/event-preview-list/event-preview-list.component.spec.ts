import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPreviewListComponent } from './event-preview-list.component';

describe('EventPreviewListComponent', () => {
  let component: EventPreviewListComponent;
  let fixture: ComponentFixture<EventPreviewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventPreviewListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventPreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
