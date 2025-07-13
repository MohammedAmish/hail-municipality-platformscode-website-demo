import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoCreationComponent } from './co-creation.component';

describe('CoCreationComponent', () => {
  let component: CoCreationComponent;
  let fixture: ComponentFixture<CoCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoCreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
