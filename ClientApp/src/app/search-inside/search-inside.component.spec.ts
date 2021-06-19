import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInsideComponent } from './search-inside.component';

describe('SearchInsideComponent', () => {
  let component: SearchInsideComponent;
  let fixture: ComponentFixture<SearchInsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
