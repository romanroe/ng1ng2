import {ServiceX} from "./serviceX";
import {angular1Module} from "./app_v1.module";

class Controller1 {

    bla = this.serviceX.methodX();

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

}

angular1Module.controller("Controller1", Controller1);
