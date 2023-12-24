import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NodeService} from "../services/node.service";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('AppComponent', () => {
  let httpMock:HttpTestingController;
  let service:NodeService;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NodeService],
      imports: [HttpClientTestingModule]    }).compileComponents();
    service=TestBed.inject(NodeService);
    httpMock=TestBed.get(HttpTestingController);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'untitled2' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, untitled2');
  });
});
