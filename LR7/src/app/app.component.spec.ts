import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lab7'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lab7');
  });

  it(`check empty name`, () => {
    component.userData.name="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#nameErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check empty email`, () => {
    component.userData.email="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check nonviable email`, () => {
    component.userData.email="podolsky490gmail.com";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#emailErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check empty phone`, () => {
    component.userData.phone="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check nonviable phone`, () => {
    component.userData.phone="0977360309";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check nonviable phone`, () => {
    component.userData.phone="0977360309";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#phoneErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check empty sum`, () => {
    component.userData.total="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#totalErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check empty sum`, () => {
    component.userData.total="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#totalErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check nonviable sum`, () => {
    component.userData.total="a21321a";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#totalErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check nonviable sum`, () => {
    component.userData.total="a21321a";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#totalErr').textContent;
    expect(elementText).toBe('Помилка');
  });

  it(`check empty txtmsg`, () => {
    component.userData.txtmsg="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#txtErr').textContent;
    expect(elementText).toBe('Заповніть');
  });

  it(`check empty txtmsg`, () => {
    component.userData.txtmsg="";
    component.checkData();
    fixture.detectChanges();
    let elementText = fixture.nativeElement.querySelector('#txtErr').textContent;
    expect(elementText).toBe('Заповніть');
  });
});
