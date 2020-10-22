import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XOrOComponent } from './x-or-o.component';

describe('XOrOComponent', () => {
  let component: XOrOComponent;
  let fixture: ComponentFixture<XOrOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XOrOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XOrOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
