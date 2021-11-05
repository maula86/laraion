import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnggotaaddPage } from './anggotaadd.page';

describe('AnggotaaddPage', () => {
  let component: AnggotaaddPage;
  let fixture: ComponentFixture<AnggotaaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnggotaaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
