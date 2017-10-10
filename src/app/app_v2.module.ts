import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {UpgradeModule} from "@angular/upgrade/static";
import {Directive1Upgraded} from "./directive1";
import {serviceXProvider} from "./serviceX";
import {WrapperComponent} from "./Wrapper.component";

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ],
    providers: [
        serviceXProvider
    ],
    declarations: [
        Directive1Upgraded,
        WrapperComponent
    ],
    entryComponents: [
        WrapperComponent,
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap() {
        this.upgrade.bootstrap(document.body, ["ng1ng2"], {strictDi: true});
    }
}

platformBrowserDynamic().bootstrapModule(AppModule);

