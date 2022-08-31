import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(),AppRoutingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    spyOn(router,'navigate');

    component.goToPickupCalls();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-calls']);
  });
  it('should go new create', () => {
    spyOn(router,'navigate');

    component.goToPickupCall();

    expect(router.navigate).toHaveBeenCalledWith(['pickup-call']);
  });

});
