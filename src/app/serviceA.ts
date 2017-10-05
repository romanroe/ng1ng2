
import {appModule} from "../index";
import {ServiceX} from "./serviceX";

let counter = 0;

export class ServiceA {

    private counter = counter++;

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

    methodA() {
        return this.serviceX.methodX() + " - ServiceA - " + this.counter;
    }

}

appModule.service("serviceA", ServiceA);
