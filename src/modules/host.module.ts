import { ContainerModule } from "inversify";
import { TYPES } from "../types";
import { INativeHostService, NativeHostService } from "../services/NativeHostService";
import { ConfigService, IConfigService } from "../services/ConfigService";

export const hostModule = new ContainerModule((bind) => {
  bind<INativeHostService>(TYPES.NativeHostService).to(NativeHostService).inSingletonScope();
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope();
});