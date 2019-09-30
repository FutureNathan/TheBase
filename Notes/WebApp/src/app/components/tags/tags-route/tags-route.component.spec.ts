import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsRouteComponent } from './tags-route.component';

describe('TagsRouteComponent', () => {
  let component: TagsRouteComponent;
  let fixture: ComponentFixture<TagsRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
