import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
// import {disableDeprecatedForms, provideForms} from '@angular/forms';
// import {enableProdMode} from '@angular/core';

import {APP_ROUTER_PROVIDERS} from './app/routes';
import {App} from './app/app';

// enableProdMode()

bootstrap(App, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    // disableDeprecatedForms,
    // provideForms,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
])
.catch(err => console.error(err));
