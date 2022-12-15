import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueuePersonComponent } from './queue-person.component';

describe('QueuePersonComponent', () => {
  let component: QueuePersonComponent;
  let fixture: ComponentFixture<QueuePersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueuePersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueuePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
