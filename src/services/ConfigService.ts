import { inject, injectable } from "inversify";
import { TYPES } from "../types";
import { type ILogService } from "./LogService";

export interface IConfigService {
    setConfig(config: object): void;
    getConfig(): any;
    updateHtml(): void;
}

@injectable()
export class ConfigService implements IConfigService {
    private config: any = {};
    constructor(
        @inject(TYPES.LogService) private logger: ILogService,
    ) {
      this.logger.log('ConfigService 🔧');
    }

    setConfig(config: object) {
      this.config = config;
    }

    getConfig() {
      return this.config
    }

    updateHtml() {
      document.querySelector<HTMLDivElement>('#config')!.innerHTML = JSON.stringify(this.config);
    }
}