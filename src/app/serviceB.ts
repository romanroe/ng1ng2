import {ServiceX} from "./serviceX";
import {angular1Module} from "./app_v1.module";

let counter = 0;

export class ServiceB {

    private counter = counter++;

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

    methodB() {
        return this.serviceX.methodX() + " - ServiceB - " + this.counter;
    }

}

angular1Module.service("serviceB", ServiceB);
