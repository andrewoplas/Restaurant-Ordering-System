import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemAddComponent } from '@admin/menu-item-add.component';

describe('MenuItemAddComponent', () => {
  let component: MenuItemAddComponent;
  let fixture: ComponentFixture<MenuItemAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuItemAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
