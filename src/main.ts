import { defaultConfig } from "../config.js";
import { crawl, writeJson, writeDatabase } from "./core.js";

await crawl(defaultConfig);
await writeJson(defaultConfig);
await writeDatabase(defaultConfig);
