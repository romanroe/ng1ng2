
import {appModule} from "../index";
import {ServiceX} from "./serviceX";

class Controller1 {

    bla = this.serviceX.methodX();

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
    }

}

appModule.controller("Controller1", Controller1);
