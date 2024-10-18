import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './DinosaurType-card.component.html',
  styleUrls: ['./DinosaurType-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.DinosaurType-card]': 'true'
  }
})

export class DinosaurTypeCardComponent {


}