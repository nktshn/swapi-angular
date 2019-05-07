import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiDashboardComponent } from './swapi-dashboard.component';

describe('SwapiDashboardComponent', () => {
  let component: SwapiDashboardComponent;
  let fixture: ComponentFixture<SwapiDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
