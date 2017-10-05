
import {appModule} from "../index";
import {ServiceX} from "./serviceX";

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

appModule.service("serviceB", ServiceB);
