import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { provideRouter } from '@angular/router';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a heading with the text of "Logz"', () => {
    const headerEl: HTMLElement = fixture.nativeElement;
    const h1 = headerEl.querySelector('h1')!;
    expect(h1.textContent).toEqual('logz');
  });

  it('should display a link of "Features"', () => {
    const headerEl: HTMLElement = fixture.nativeElement;
    const links = headerEl.querySelectorAll('a')!;
    expect(links[0].textContent).toEqual('Features');
  });

  it('should display a link of "About us"', () => {
    const headerEl: HTMLElement = fixture.nativeElement;
    const links = headerEl.querySelectorAll('a')!;
    expect(links[1].textContent).toEqual('About us');
  });

  it('should display a button with text of "Generate now"', () => {
    const headerEl: HTMLElement = fixture.nativeElement;
    const button = headerEl.querySelector('button')!;
    expect(button.textContent).toEqual('Generate now');
  });
});
