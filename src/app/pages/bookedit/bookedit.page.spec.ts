import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BookeditPage } from './bookedit.page';

describe('BookeditPage', () => {
  let component: BookeditPage;
  let fixture: ComponentFixture<BookeditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookeditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BookeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
