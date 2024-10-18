import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'DinosaurType-new',
  templateUrl: './DinosaurType-new.component.html',
  styleUrls: ['./DinosaurType-new.component.scss']
})
export class DinosaurTypeNewComponent {
  @ViewChild("DinosaurTypeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}