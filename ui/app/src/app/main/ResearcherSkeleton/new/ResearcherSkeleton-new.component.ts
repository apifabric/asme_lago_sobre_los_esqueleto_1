import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ResearcherSkeleton-new',
  templateUrl: './ResearcherSkeleton-new.component.html',
  styleUrls: ['./ResearcherSkeleton-new.component.scss']
})
export class ResearcherSkeletonNewComponent {
  @ViewChild("ResearcherSkeletonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}