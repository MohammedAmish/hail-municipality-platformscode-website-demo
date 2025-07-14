import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationPolicyComponent } from './participation-policy.component';

describe('ParticipationPolicyComponent', () => {
  let component: ParticipationPolicyComponent;
  let fixture: ComponentFixture<ParticipationPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationPolicyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
