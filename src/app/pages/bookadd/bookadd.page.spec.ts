import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookaddPage } from './bookadd.page';

describe('BookaddPage', () => {
  let component: BookaddPage;
  let fixture: ComponentFixture<BookaddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookaddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookaddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
