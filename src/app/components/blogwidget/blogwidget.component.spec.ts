import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogwidgetComponent } from './blogwidget.component';

describe('BlogwidgetComponent', () => {
  let component: BlogwidgetComponent;
  let fixture: ComponentFixture<BlogwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogwidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
