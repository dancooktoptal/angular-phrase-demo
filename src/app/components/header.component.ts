import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: '../views/header.view.html'
})
export class HeaderComponent {
    private translateService: TranslateService;
    private currentLanguage: string;

    constructor(translateService: TranslateService) {
        this.translateService = translateService;
        this.currentLanguage = 'en-GB';
    }

    setLanguage(languageName: string): void {
        this.translateService.use(languageName);
        this.currentLanguage = languageName;
    }
 }