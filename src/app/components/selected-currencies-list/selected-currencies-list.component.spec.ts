import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedCurrenciesListComponent } from './selected-currencies-list.component';

describe('SelectedCurrenciesListComponent', () => {
  let component: SelectedCurrenciesListComponent;
  let fixture: ComponentFixture<SelectedCurrenciesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedCurrenciesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedCurrenciesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
