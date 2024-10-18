import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Discovery-card.component.html',
  styleUrls: ['./Discovery-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Discovery-card]': 'true'
  }
})

export class DiscoveryCardComponent {


}