import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvaSchematicComponent } from './cva-schematic.component';

describe('CvaSchematicComponent', () => {
  let component: CvaSchematicComponent;
  let fixture: ComponentFixture<CvaSchematicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvaSchematicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CvaSchematicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
