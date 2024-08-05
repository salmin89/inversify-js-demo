import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { type ILogService } from "./LogService";
import { type IDownloadService } from "./DownloadService";
import { type IUploadService } from "./UploadService";

export interface IStatusService {
  updateHtml(): void;
}

@injectable()
export class StatusService implements IStatusService {
    config: any = {};
    constructor(
        @inject(TYPES.LogService) private logger: ILogService,
        @inject(TYPES.DownloadService) private downloadService: IDownloadService,
        @inject(TYPES.UploadService) private uploadService: IUploadService,
    ) {
      this.logger.log('StatusService 🔧');
      this.init();
    }


    init() {
      document.querySelector<HTMLDivElement>('#feature-status')!.innerHTML = `
      <ul>
        <li>Upload: false</li>
        <li>Download: false</li>
      </ul>
      `;
    }

    updateHtml() {

      document.querySelector<HTMLDivElement>('#feature-status')!.innerHTML = `
      <ul>
        <li>Upload: ${this.uploadService.enabled}</li>
        <li>Download: ${this.downloadService.enabled}</li>
      </ul>
      `;
    }
}