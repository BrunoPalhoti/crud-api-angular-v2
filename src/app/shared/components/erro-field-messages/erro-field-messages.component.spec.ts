import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroFieldMessagesComponent } from './erro-field-messages.component';

describe('ErroFieldMessagesComponent', () => {
  let component: ErroFieldMessagesComponent;
  let fixture: ComponentFixture<ErroFieldMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroFieldMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroFieldMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
