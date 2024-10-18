import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BoneType-card.component.html',
  styleUrls: ['./BoneType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BoneType-card]': 'true'
  }
})

export class BoneTypeCardComponent {


}