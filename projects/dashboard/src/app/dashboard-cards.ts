import { HelloWorldContainerTwoComponent } from "./hello-world-container-two/hello-world-container-two.component";
import { HelloWorldContainerComponent } from "./hello-world-container/hello-world-container.component";
import { ListContainerComponent } from "./list-container/list-container.component";

export const dashboardCards: any = {
    HELLO_WORLD: HelloWorldContainerComponent,
    HELLO_WORLD_TWO: HelloWorldContainerTwoComponent,
    LIST: ListContainerComponent
};