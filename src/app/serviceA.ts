
import {appModule} from "../index";
import {ServiceX} from "./serviceX";

export class ServiceA {

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

    methodA() {
        return this.serviceX.methodX() + " - ServiceA.methodA()";
    }

}

appModule.service("serviceA", ServiceA);
