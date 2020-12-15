import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SuscriptorComponent } from './suscriptor.component';

describe('SuscriptorComponent', () => {
  let component: SuscriptorComponent;
  let fixture: ComponentFixture<SuscriptorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SuscriptorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuscriptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
