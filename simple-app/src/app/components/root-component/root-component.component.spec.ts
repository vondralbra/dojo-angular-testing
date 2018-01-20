

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootComponentComponent } from './root-component.component';
import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';
import { Component3Component } from '../component3/component3.component';

describe('RootComponentComponent', () => {
  let component: RootComponentComponent;
  let fixture: ComponentFixture<RootComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootComponentComponent, Component1Component, Component2Component, Component3Component]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
