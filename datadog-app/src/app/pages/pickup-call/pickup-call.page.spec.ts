import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

import { PickupCallPage } from './pickup-call.page';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupCallPage ],
      imports: [IonicModule.forRoot(),AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    router = TestBed.get(Router);
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router,'navigate');

    component.goToPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });
});
