
import {appModule} from "../index";

export class ServiceX {

    methodX() {
        return "ServiceX.methodX()";
    }

}

appModule.service("serviceX", ServiceX);
