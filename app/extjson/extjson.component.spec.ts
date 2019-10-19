import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtjsonComponent } from './extjson.component';

describe('ExtjsonComponent', () => {
  let component: ExtjsonComponent;
  let fixture: ComponentFixture<ExtjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
