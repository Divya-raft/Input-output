import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildComComponent } from './child-com.component';

describe('ChildComComponent', () => {
  let component: ChildComComponent;
  let fixture: ComponentFixture<ChildComComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildComComponent]
    });
    fixture = TestBed.createComponent(ChildComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
