import {IDirective, IScope} from "angular";
import {appModule} from "../index";
import {ServiceA} from "./serviceA";
import {ServiceX} from "./serviceX";
import {ServiceB} from "./serviceB";

class Directive2Controller {

    value1 = this.serviceX.methodX();
    value2 = this.serviceA.methodA();
    value3 = this.serviceB.methodB();

    /*@ngInject*/
    constructor(private serviceX: ServiceX,
                private serviceA: ServiceA,
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

appModule.directive("directive2", directive2);
