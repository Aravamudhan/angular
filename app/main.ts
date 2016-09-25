import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
//This initializes the platform for the app to run in, then uses the platform to boostrap the AppModule
platform.bootstrapModule(AppModule);
