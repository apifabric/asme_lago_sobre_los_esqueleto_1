import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './SkeletonDinosaurType-card.component.html',
  styleUrls: ['./SkeletonDinosaurType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.SkeletonDinosaurType-card]': 'true'
  }
})

export class SkeletonDinosaurTypeCardComponent {


}