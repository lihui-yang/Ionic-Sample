import { Component, OnInit, Input } from '@angular/core';
import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
    applicationId: '61abbcbb-00aa-4232-ba77-d174193d1f6d',
    clientToken: 'pub0bd179612fe0e3e7270d9c5b4b8cf304',
    site: 'datadoghq.com',
    service:'datadog-poc',
    env:'staging-1',
    // Specify a version number to identify the deployed version of your application in Datadog 
    // version: '1.0.0',
    sampleRate: 100,
    premiumSampleRate: 100,
    trackInteractions: true,
    defaultPrivacyLevel:'mask-user-input'
});
    
datadogRum.startSessionReplayRecording();

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;

  @Input() status:string;
  @Input() updatedAt:string;
  @Input() createdAt:string;
  @Input() notes:string;
  @Input() values:string;

  constructor() { }

  ngOnInit() {}

}
