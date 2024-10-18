import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './Skeleton-card.component.html',
  styleUrls: ['./Skeleton-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.Skeleton-card]': 'true'
  }
})

export class SkeletonCardComponent {


}