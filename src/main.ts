import "reflect-metadata";


import { container } from './container.ts'
import { TYPES } from "./types.ts";
import { IDownloadService } from "./services/DownloadService.ts";
import { ILogService } from "./services/LogService.ts";
import { INativeHostService } from "./services/NativeHostService.ts";
import { IConfigService } from "./services/ConfigService.ts";
import { IStatusService } from "./services/StatusService.ts";
import { IUploadService } from "./services/UploadService.ts";



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <form action="javascript:void(0);">
    <fieldset>
      <legend>Config</legend>
      <div id="config">{}</div>
    </fieldset>
  </form>

   <form action="javascript:void(0);">
    <fieldset>
      <legend>Toggle</legend>
      <button id="toggle">toggle config</button>
    </fieldset>
  </form>

   <form action="javascript:void(0);">
    <fieldset>
      <legend>Features status</legend>
      <div id="feature-status">{}</div>
    </fieldset>
  </form>

   <form action="javascript:void(0);">
    <fieldset>
      <legend>Feature usage</legend>
      <button id="downlad">Download</button>
    </fieldset>
  </form>
`


// run
container.get<INativeHostService>(TYPES.NativeHostService).tryConnect();

// binds
document.querySelector<HTMLButtonElement>('#downlad')!.addEventListener('click', async () => {
  const file = await container.get<IDownloadService>(TYPES.DownloadService).download()
  container.get<ILogService>(TYPES.LogService).log(file)
});

document.querySelector<HTMLButtonElement>('#toggle')!.addEventListener('click', () => {

  const configService = container.get<IConfigService>(TYPES.ConfigService);
  const statusService = container.get<IStatusService>(TYPES.StatusService);
  const downloadService = container.get<IDownloadService>(TYPES.DownloadService)
  const uploadService = container.get<IUploadService>(TYPES.UploadService);

  const config = configService.getConfig();
  const newConfig = {
    enabled: !config.enabled,
    upload: !config.upload,
    download: !config.download,
  };
  configService.setConfig(newConfig);

  downloadService.enabled = !downloadService.enabled;
  uploadService.enabled = !uploadService.enabled;
  
  configService.updateHtml();
  statusService.updateHtml();
  
});


