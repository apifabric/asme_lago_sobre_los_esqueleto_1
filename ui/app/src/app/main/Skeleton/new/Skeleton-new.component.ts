import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Skeleton-new',
  templateUrl: './Skeleton-new.component.html',
  styleUrls: ['./Skeleton-new.component.scss']
})
export class SkeletonNewComponent {
  @ViewChild("SkeletonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}