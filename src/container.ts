import { Container } from "inversify";
import { featuresModule } from "./modules/features.module";
import { hostModule } from "./modules/host.module";
import { utilModule } from "./modules/util.module";

const container = new Container();
container.load(utilModule, hostModule, featuresModule);


export { container };