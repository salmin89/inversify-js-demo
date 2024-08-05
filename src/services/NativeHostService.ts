import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { type ILogService } from "./LogService";
import { type IConfigService } from "./ConfigService";
import { type IStatusService } from "./StatusService";
import { type IDownloadService } from "./DownloadService";
import { type IUploadService } from "./UploadService";

export interface INativeHostService {
  tryConnect(): void;
}

@injectable()
export class NativeHostService implements INativeHostService {
    constructor(
        @inject(TYPES.LogService) private logger: ILogService,
        @inject(TYPES.ConfigService) private configService: IConfigService,
        @inject(TYPES.StatusService) private statusService: IStatusService,
        @inject(TYPES.DownloadService) private downloadService: IDownloadService,
        @inject(TYPES.UploadService) private uploadService: IUploadService,
    ) {
      this.logger.log('NativeHostService 🔧');
    }

  tryConnect() {

    this.logger.log('Trying to connect to native host');
    setTimeout(() => {

      this.logger.log('connected');

      this.configService.setConfig({
        enabled: true,
        upload: false,
        download: true,
      })

      this.downloadService.enable();
      false && this.uploadService.enable();

      this.configService.updateHtml();
      this.statusService.updateHtml();

    }, 1000)
  }

  
}