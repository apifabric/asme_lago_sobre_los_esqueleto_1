import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BoneType-new',
  templateUrl: './BoneType-new.component.html',
  styleUrls: ['./BoneType-new.component.scss']
})
export class BoneTypeNewComponent {
  @ViewChild("BoneTypeForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}