import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonExploreComponent } from './boton-explore.component';

describe('BotonExploreComponent', () => {
  let component: BotonExploreComponent;
  let fixture: ComponentFixture<BotonExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotonExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
