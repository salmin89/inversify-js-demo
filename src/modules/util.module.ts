import { ContainerModule } from "inversify";
import { TYPES } from "../types";
import { ILogService, LogService } from "../services/LogService";
import { IStatusService, StatusService } from "../services/StatusService";

export const utilModule = new ContainerModule((bind) => {
  bind<ILogService>(TYPES.LogService).to(LogService).inSingletonScope();
  bind<IStatusService>(TYPES.StatusService).to(StatusService).inSingletonScope();
});