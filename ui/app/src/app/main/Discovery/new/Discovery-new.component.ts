import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Discovery-new',
  templateUrl: './Discovery-new.component.html',
  styleUrls: ['./Discovery-new.component.scss']
})
export class DiscoveryNewComponent {
  @ViewChild("DiscoveryForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}