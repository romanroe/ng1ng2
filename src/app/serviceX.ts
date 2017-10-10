
import {angular1Module} from "./app_v1.module";

export class ServiceX {

    methodX() {
        return "ServiceX.methodX()";
    }

}

angular1Module.service("serviceX", ServiceX);



export const serviceXProvider = {
    provide: ServiceX,
    deps: ["$injector"],
    useFactory: (i: any) => i.get("serviceX")
};
