import {IDirective} from "angular";
import {appModule} from "../index";
import {ServiceX} from "./serviceX";
import {ServiceA} from "./serviceA";
import {ServiceB} from "./serviceB";


class Directive1Controller {

    value1 = this.serviceX.methodX();
    value2 = this.serviceA.methodA();
    value3 = this.serviceB.methodB();

    /*@ngInject*/
    constructor(private serviceX: ServiceX,
                private serviceA: ServiceA,
                private serviceB: ServiceB) {

    }
}

function directive1(): IDirective {
    return {
        restrict: "E",
        scope: {},
        controller: Directive1Controller,
        controllerAs: "$ctrl",
        templateUrl: "/app/directive1.html"
    };
}

appModule.directive("directive1", directive1);
