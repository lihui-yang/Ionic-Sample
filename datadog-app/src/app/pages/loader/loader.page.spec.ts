import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaderPage } from './loader.page';
//import { Router } from 'express';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPage);
    router = TestBed.get(Router);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router,'navigate');

    component.ngOnInit();

    expect(router.navigate).toHaveBeenCalledWith(['login']);
  });
});
