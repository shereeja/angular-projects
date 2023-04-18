import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiuserComponent } from './regiuser.component';

describe('RegiuserComponent', () => {
  let component: RegiuserComponent;
  let fixture: ComponentFixture<RegiuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
