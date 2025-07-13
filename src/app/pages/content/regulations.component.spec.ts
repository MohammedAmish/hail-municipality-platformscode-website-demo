import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegulationsComponent } from './regulations.component';
import { TranslateModule } from '@ngx-translate/core';

describe('RegulationsComponent', () => {
  let component: RegulationsComponent;
  let fixture: ComponentFixture<RegulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulationsComponent ],
      imports: [TranslateModule.forRoot()]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 