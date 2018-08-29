import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { routerTransition } from './animations/routertransition.animation';
import { DomSanitizer } from '@angular/platform-browser';

import { MatIcon, MatIconRegistry } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [ routerTransition ]
})
export class AppComponent {
    title = 'app';

    constructor(translate: TranslateService, matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
        translate.setDefaultLang('en-GB');
        translate.use('en-GB');

        matIconRegistry.addSvgIcon('de-DE', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/de-DE.svg'));
        matIconRegistry.addSvgIcon('en-GB', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/en-GB.svg'));
        // matIconRegistry.addSvgIcon('en-GB', domSanitizer.bypassSecurityTrustResourceUrl('./assets/images/test.svg'));
    }

    getState(outlet) {
        return outlet.activatedRouteData.state;
    }
}