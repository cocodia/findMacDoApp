import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { McdoLocateComponent } from './mcdo-locate.component';

describe('McdoLocateComponent', () => {
  let component: McdoLocateComponent;
  let fixture: ComponentFixture<McdoLocateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ McdoLocateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(McdoLocateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
