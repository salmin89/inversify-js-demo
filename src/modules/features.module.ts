import { ContainerModule } from "inversify";
import { TYPES } from "../types";
import { DownloadService, IDownloadService } from "../services/DownloadService";
import { IUploadService, UploadService } from "../services/UploadService";

export const featuresModule = new ContainerModule((bind) => {
  bind<IDownloadService>(TYPES.DownloadService).to(DownloadService).inSingletonScope();
  bind<IUploadService>(TYPES.UploadService).to(UploadService).inSingletonScope();
});