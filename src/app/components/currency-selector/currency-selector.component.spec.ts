import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencySelectorComponent} from './currency-selector.component';
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {By} from "@angular/platform-browser";
import {AbstractControl} from "@angular/forms";

const expectFormValues = (fixture: ComponentFixture<CurrencySelectorComponent>, values: number[]) => {
  const [hourly, daily, monthly, yearly] = values;
  expect(fixture.debugElement.query(By.css('input[formControlName="hourly"]')).nativeElement.value).toBe(hourly.toString());
  expect(fixture.debugElement.query(By.css('input[formControlName="daily"]')).nativeElement.value).toBe(daily.toString());
  expect(fixture.debugElement.query(By.css('input[formControlName="monthly"]')).nativeElement.value).toBe(monthly.toString());
  expect(fixture.debugElement.query(By.css('input[formControlName="yearly"]')).nativeElement.value).toBe(yearly.toString());
}

describe('CurrencySelectorComponent', () => {
  let component: CurrencySelectorComponent;
  let fixture: ComponentFixture<CurrencySelectorComponent>;
  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [NoopAnimationsModule, CurrencySelectorComponent],
      providers: [],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should calculate values in other fields on form change', () => {
    it('should calculate hours', () => {
      const hourlyControl: AbstractControl = component.form.get('hourly')!;

      hourlyControl.setValue(2);
      expectFormValues(fixture, [2, 16, 336, 4032]);

      hourlyControl.setValue(1);
      expectFormValues(fixture, [1, 8, 168, 2016]);
    })

    it('should calculate daily', () => {
      const dailyControl: AbstractControl = component.form.get('daily')!;

      dailyControl.setValue(16);
      expectFormValues(fixture, [2, 16, 336, 4032]);

      dailyControl.setValue(8);
      expectFormValues(fixture, [1, 8, 168, 2016]);
    });

    it('should calculate monthly', () => {
      const monthlyControl: AbstractControl = component.form.get('monthly')!;

      monthlyControl.setValue(336);
      expectFormValues(fixture, [2, 16, 336, 4032]);

      monthlyControl.setValue(168);
      expectFormValues(fixture, [1, 8, 168, 2016]);
    });

    it('should calculate yearly', () => {
      const yearlyControl: AbstractControl = component.form.get('yearly')!;

      yearlyControl.setValue(4032);
      expectFormValues(fixture, [2, 16, 336, 4032]);

      yearlyControl.setValue(2016);
      expectFormValues(fixture, [1, 8, 168, 2016]);
    });
  });

  it('should emit value to output on form change', () => {
    jest.spyOn(component.rateChange, 'emit');

    // given
    const hourlyControl: AbstractControl = component.form.get('hourly')!;

    // when
    hourlyControl.setValue(200);

    // then
    expect(component.rateChange.emit).toHaveBeenCalledWith({
      currency: 'Currency', // initial default value
      period: 'hourly',
      value: 200,
      valueInUsd: 2600,
    });
  });

  describe('when currentUserRate changes', () => {

    describe('and the currency is different', () => {
      it('should calculate values for USD-X = 1', () => {
        fixture.componentRef.setInput('currentUserRate', {currency: 'USD', period: 'hourly', value: 10, valueInUsd: 10});
        fixture.componentRef.setInput('currencyInUsd', 1);
        fixture.detectChanges();
        expectFormValues(fixture, [10, 80, 1680, 20160]);
      })
      it('should calculate values for USD-X = 10', () => {
        fixture.componentRef.setInput('currentUserRate', {currency: 'USD', period: 'hourly', value: 100, valueInUsd: 1000});
        fixture.componentRef.setInput('currencyInUsd', 10);
        fixture.detectChanges();
        expectFormValues(fixture, [100, 800, 16800, 201600]);
      })
      it('should calculate values for USD-X = 0.1', () => {
        fixture.componentRef.setInput('currentUserRate', {currency: 'USD', period: 'hourly', value: 100, valueInUsd: 10});
        fixture.componentRef.setInput('currencyInUsd', 0.1);
        fixture.detectChanges();
        expectFormValues(fixture, [100, 800, 16800, 201600]);
      })
    })
  })

  it('should not change when the currency is the same', () => {
    fixture.componentRef.setInput('currentUserRate', {currency: 'Currency', period: 'hourly', value: 1, valueInUsd: 1});
    fixture.detectChanges();
    expectFormValues(fixture, [1, 8, 168, 2016]);
  })

});
