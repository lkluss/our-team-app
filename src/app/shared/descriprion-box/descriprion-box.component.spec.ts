import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriprionBoxComponent } from './descriprion-box.component';

describe('DescriprionBoxComponent', () => {
  let component: DescriprionBoxComponent;
  let fixture: ComponentFixture<DescriprionBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriprionBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriprionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
