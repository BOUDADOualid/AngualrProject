import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRsolusAdminComponent } from './incident-rsolus-admin.component';

describe('IncidentRsolusAdminComponent', () => {
  let component: IncidentRsolusAdminComponent;
  let fixture: ComponentFixture<IncidentRsolusAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentRsolusAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentRsolusAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
