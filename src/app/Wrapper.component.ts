import {Component, ElementRef} from "@angular/core";
import {downgradeComponent} from "@angular/upgrade/static";
import {angular1Module} from "./app_v1.module";
import {ServiceA} from "./serviceA";
import {ServiceX} from "./serviceX";
import * as $ from "jquery";

@Component({
    selector: "wrapper",
    providers: [ServiceA],
    template: `
        <directive1></directive1>
    `
})
export class WrapperComponent {

    constructor(elementRef: ElementRef, serviceX: ServiceX, serviceA: ServiceA) {
        let native = $(elementRef.nativeElement);
        native.data("key", "value");

        console.log(native.data("key"));
    }

}


angular1Module.directive(
    "wrapper",
    downgradeComponent({component: WrapperComponent}));
