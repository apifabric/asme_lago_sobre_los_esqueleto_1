import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './BoneSkeleton-card.component.html',
  styleUrls: ['./BoneSkeleton-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.BoneSkeleton-card]': 'true'
  }
})

export class BoneSkeletonCardComponent {


}