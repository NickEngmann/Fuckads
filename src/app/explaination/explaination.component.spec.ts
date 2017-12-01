import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainationComponent } from './explaination.component';

describe('ExplainationComponent', () => {
  let component: ExplainationComponent;
  let fixture: ComponentFixture<ExplainationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExplainationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
