import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfopanelLayout } from './infopanel-layout';

describe('InfopanelLayout', () => {
  let component: InfopanelLayout;
  let fixture: ComponentFixture<InfopanelLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfopanelLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfopanelLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
