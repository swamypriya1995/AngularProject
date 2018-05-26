import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecompComponent } from './updatecomp.component';

describe('UpdatecompComponent', () => {
  let component: UpdatecompComponent;
  let fixture: ComponentFixture<UpdatecompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
