import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CobaPage } from './coba.page';

describe('CobaPage', () => {
  let component: CobaPage;
  let fixture: ComponentFixture<CobaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CobaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
