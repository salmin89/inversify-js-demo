import { injectable } from "inversify";

export interface ILogService {
  log(...args: any): void;
}

@injectable()
export class LogService implements ILogService {
    constructor(
        // @inject(TYPES.Logger) private logger: ILogger,
        // @inject(TYPES.ConfigService) private configService: IConfigService
    ) {
      console.log('LogService 🔧');
    }

    log(...args: any) {
      console.log(...args);
    }
}