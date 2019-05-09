import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiResourceItemDetailsComponent } from './swapi-resource-item-details.component';

describe('SwapiResourceItemDetailsComponent', () => {
  let component: SwapiResourceItemDetailsComponent;
  let fixture: ComponentFixture<SwapiResourceItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiResourceItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiResourceItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
