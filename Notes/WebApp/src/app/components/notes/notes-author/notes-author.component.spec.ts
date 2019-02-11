import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesAuthorComponent } from './notes-author.component';

describe('NotesAuthorComponent', () => {
  let component: NotesAuthorComponent;
  let fixture: ComponentFixture<NotesAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
