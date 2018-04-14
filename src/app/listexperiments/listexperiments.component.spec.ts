import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListexperimentsComponent } from './listexperiments.component';

describe('ListexperimentsComponent', () => {
  let component: ListexperimentsComponent;
  let fixture: ComponentFixture<ListexperimentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexperimentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexperimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
