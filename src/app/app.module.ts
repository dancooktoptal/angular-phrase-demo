import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient,
         HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';         

import { MatTabsModule,
         MatToolbarModule,
         MatIconModule,
         MatMenuModule,
         MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule,
         TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header.component';
import { NavigationComponent } from './components/navigation.component';
import { ContentOneComponent } from './components/content/contentone.component';
import { ContentTwoComponent } from './components/content/contenttwo.component';
import { ContentThreeComponent } from './components/content/contentthree.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translation/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ContentOneComponent,
    ContentTwoComponent,
    ContentThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: (HttpLoaderFactory),
            deps: [HttpClient]
        }
    }),
    RouterModule.forRoot([{
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },{
        path: 'first',
        component: ContentOneComponent,
        data: { state: 'first' }
    },{
        path: 'second',
        component: ContentTwoComponent,
        data: { state: 'second' }
    },{
        path: 'third',
        component: ContentThreeComponent,
        data: { state: 'third' }
    }]),
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 