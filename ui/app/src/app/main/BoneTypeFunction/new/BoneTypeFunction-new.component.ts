import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BoneTypeFunction-new',
  templateUrl: './BoneTypeFunction-new.component.html',
  styleUrls: ['./BoneTypeFunction-new.component.scss']
})
export class BoneTypeFunctionNewComponent {
  @ViewChild("BoneTypeFunctionForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}