import {IDirective} from "angular";
import {angular1Module} from "./app_v1.module";
import {ServiceB} from "./serviceB";
import {ServiceX} from "./serviceX";
import * as $ from "jquery";
import {downgradeComponent, UpgradeComponent} from "@angular/upgrade/static";
import {Directive, ElementRef, Injector} from "@angular/core";

class Directive2Controller {

    value1 = this.serviceX.methodX();
    // value2 = this.serviceA.methodA();
    value3 = this.serviceB.methodB();

    /*@ngInject*/
    constructor(private serviceX: ServiceX,
                // private serviceA: ServiceA,
                private serviceB: ServiceB) {


    }
}

function directive2(): IDirective {
    return {
        restrict: "E",
        scope: {
        },
        controller: Directive2Controller,
        controllerAs: "$ctrl",
        templateUrl: "/app/directive2.html"
    };
}

angular1Module.directive("directive2", directive2);


// @Directive({
//     selector: "directive2"
// })
// export class Directive2Upgraded extends UpgradeComponent {
//     constructor(elementRef: ElementRef, injector: Injector) {
//         super("directive2", elementRef, injector);
//
//     }
// }
//
//
// angular1Module.directive(
//     "directive2",
//     downgradeComponent({component: Directive2Upgraded}));
//
