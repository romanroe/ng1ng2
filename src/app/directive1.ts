import {IDirective} from "angular";
import {ServiceX} from "./serviceX";
import {ServiceA} from "./serviceA";
import {ServiceB} from "./serviceB";
import {angular1Module} from "./app_v1.module";
import {Directive, ElementRef, Injector} from "@angular/core";
import {UpgradeComponent} from "@angular/upgrade/static";


class Directive1Controller {

    value1 = this.serviceX.methodX();
    // value2 = this.serviceA.methodA();
    value3 = this.serviceB.methodB();

    /*@ngInject*/
    constructor(private serviceX: ServiceX,
                // private serviceA: ServiceA,
                private serviceB: ServiceB) {
    }
}
declare let require:any;
function directive1(): IDirective {
    return {
        restrict: "E",
        scope: {},
        controller: Directive1Controller,
        controllerAs: "$ctrl",
        template: require("!!raw-loader!./directive1.html")
    };
}

angular1Module.directive("directive1", directive1);



@Directive({
    selector: "directive1"
})
export class Directive1Upgraded extends UpgradeComponent {
    constructor(elementRef: ElementRef, injector: Injector, serviceA: ServiceA) {
        super("directive1", elementRef, injector);

    }
}
