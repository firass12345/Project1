import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextStylingComponent } from './text-styling.component';

describe('TextStylingComponent', () => {
  let component: TextStylingComponent;
  let fixture: ComponentFixture<TextStylingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextStylingComponent]
    });
    fixture = TestBed.createComponent(TextStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
