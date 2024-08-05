import { injectable } from "inversify";

export interface IUploadService {
  upload(): void;
  enabled: boolean;
  enable(): void;
}

@injectable()
export class UploadService implements IUploadService {
  
    enabled = false;

    constructor(
        // @inject(TYPES.Logger) private logger: ILogger,
        // @inject(TYPES.ConfigService) private configService: IConfigService
    ) {
      console.log('UploadService 🔧');
    }

    enable(): void {
      this.enabled = true;
    }

    async upload() {
      // const config = await this.configService.getConfig();
      // this.logger.log(`Downloading file from ${config.downloadEndpoint}`);
      // Simulated download logic
      // console.log('Downloading file from downloadEndpoint');
      // return new File(["downloaded content"], "downloaded-file");
      console.log('uploading file');
  }
}