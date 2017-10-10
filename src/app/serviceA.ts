import {Injectable} from "@angular/core";
import {ServiceX} from "./serviceX";

let counter = 0;

@Injectable()
export class ServiceA {

    private counter = counter++;

    /*@ngInject*/
    constructor(private serviceX: ServiceX) {
        console.log("constructor ServiceA");
    }

    methodA() {
        return this.serviceX.methodX() + " - ServiceA - " + this.counter;
    }

}

// angular1Module.service("serviceA", ServiceA);
