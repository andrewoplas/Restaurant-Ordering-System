import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistComponent } from '@occupant/receptionist.component';

describe('ReceptionistComponent', () => {
  let component: ReceptionistComponent;
  let fixture: ComponentFixture<ReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
