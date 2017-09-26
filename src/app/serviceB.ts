
import {appModule} from "../index";
import {ServiceX} from "./serviceX";

export class ServiceB {

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

    methodB() {
        return this.serviceX.methodX() + " - ServiceB.methodB()";
    }

}

appModule.service("serviceB", ServiceB);
