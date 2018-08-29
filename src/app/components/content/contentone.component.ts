import { Component } from '@angular/core';

@Component({
  selector: 'app-content-one',
  template: '{{ "WELCOME_MSG" | translate }}'
})
export class ContentOneComponent { }