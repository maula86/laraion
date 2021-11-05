import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnggotaPage } from './anggota.page';

describe('AnggotaPage', () => {
  let component: AnggotaPage;
  let fixture: ComponentFixture<AnggotaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnggotaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnggotaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
