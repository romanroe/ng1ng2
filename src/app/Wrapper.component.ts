import {Component, ElementRef} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import * as $ from "jquery";
import {angular1Module} from "./app_v1.module";
import {ServiceA} from "./serviceA";
import {ServiceX} from "./serviceX";


declare const require:any;
function template(url: string) {
    return require("!!raw-loader!./" + url);
}


@Component({
    selector: "wrapper",
    providers: [ServiceA],
    template: template("Wrapper.component.html")
})
export class WrapperComponent {

    constructor(elementRef: ElementRef, serviceX: ServiceX, serviceA: ServiceA) {
    }

}


angular1Module.directive(
    "wrapper",
    downgradeComponent({component: WrapperComponent}));
