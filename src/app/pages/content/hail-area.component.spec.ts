import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { HailAreaComponent } from './hail-area.component';

describe('HailAreaComponent', () => {
  let component: HailAreaComponent;
  let fixture: ComponentFixture<HailAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HailAreaComponent, TranslateModule.forRoot()]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HailAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 