import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BoneTypeFunction-card.component.html',
  styleUrls: ['./BoneTypeFunction-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BoneTypeFunction-card]': 'true'
  }
})

export class BoneTypeFunctionCardComponent {


}