import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableDemoComponent } from './mat-table-demo.component';

describe('MatTableDemoComponent', () => {
  let component: MatTableDemoComponent;
  let fixture: ComponentFixture<MatTableDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
