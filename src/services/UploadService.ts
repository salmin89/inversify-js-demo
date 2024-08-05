import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { type IConfigService } from "./ConfigService";
import { type ILogService } from "./LogService";

export interface IUploadService {
  upload(): void;
  enabled: boolean;
  enable(): void;
}

@injectable()
export class UploadService implements IUploadService {
  
    enabled = false;

    constructor(
        @inject(TYPES.LogService) private logger: ILogService,
        @inject(TYPES.ConfigService) private configService: IConfigService
    ) {
      console.log('UploadService 🔧');
    }

    enable(): void {
      this.enabled = true;
    }

    async upload() {
      if (!this.configService.getConfig().upload) return;
      this.logger.log('uploading file');
  }
}