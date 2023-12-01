import { defaultConfig } from "../config.js";
import { crawl, writeJson, writeDatabase } from "./core.js";

await crawl(defaultConfig);

if (defaultConfig.outputType === 'json'){
    await writeJson(defaultConfig);
} else {
    await writeDatabase(defaultConfig);
}