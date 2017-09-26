import {IDirective, IScope} from "angular";
import {appModule} from "../index";
import {ServiceA} from "./serviceA";
import {ServiceX} from "./serviceX";

class Directive2Controller {

    value1 = this.serviceX.methodX();
    value2 = this.serviceA.methodA();

    /*@ngInject*/
    constructor(private serviceX: ServiceX, private serviceA: ServiceA) {
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
