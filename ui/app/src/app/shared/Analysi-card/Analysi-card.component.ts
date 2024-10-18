import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Analysi-card.component.html',
  styleUrls: ['./Analysi-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Analysi-card]': 'true'
  }
})

export class AnalysiCardComponent {


}