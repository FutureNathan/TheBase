import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteRouteComponent } from './note-route.component';

describe('NoteRouteComponent', () => {
  let component: NoteRouteComponent;
  let fixture: ComponentFixture<NoteRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
