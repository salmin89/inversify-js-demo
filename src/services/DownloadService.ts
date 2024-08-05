import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { type ILogService } from "./LogService";
import { type IConfigService } from "./ConfigService";

export interface IDownloadService {
  enabled: boolean;
  download(): Promise<File | void> 
  enable(): void;
}

@injectable()
export class DownloadService implements IDownloadService {
    
    enabled = false;
    
    constructor(
        @inject(TYPES.LogService) private logger: ILogService,
        @inject(TYPES.ConfigService) private configService: IConfigService
    ) {
      this.logger.log('DownloadService 🔧');
      
    }

    enable() {
      this.enabled = true;
    }

    async download(): Promise<File | void> {
      const config = this.configService.getConfig();
      if (!config.download) return;

      return new File(["downloaded content"], "downloaded-file");
  }
}