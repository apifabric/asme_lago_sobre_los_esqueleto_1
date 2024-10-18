import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'BoneSkeleton-new',
  templateUrl: './BoneSkeleton-new.component.html',
  styleUrls: ['./BoneSkeleton-new.component.scss']
})
export class BoneSkeletonNewComponent {
  @ViewChild("BoneSkeletonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}