import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Site-card.component.html',
  styleUrls: ['./Site-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Site-card]': 'true'
  }
})

export class SiteCardComponent {


}