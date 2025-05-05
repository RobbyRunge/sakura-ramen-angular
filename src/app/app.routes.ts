import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    { path: 'landing-page', component: MainContentComponent },
    { path: 'imprint', component: ImprintComponent },
];
