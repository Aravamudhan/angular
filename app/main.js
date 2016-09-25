"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
//This initializes the platform for the app to run in, then uses the platform to boostrap the AppModule
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map