import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ResearcherSkeleton-card.component.html',
  styleUrls: ['./ResearcherSkeleton-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ResearcherSkeleton-card]': 'true'
  }
})

export class ResearcherSkeletonCardComponent {


}