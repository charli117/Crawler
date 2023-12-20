// @ts-ignore
import { Config } from "./src/config";


export const defaultConfig: Config = {
    url: "https://hc.jiandaoyun.com/doc/",
    match: "https://hc.jiandaoyun.com/doc/**",
    inclusions: [".page-title",".markdown-body"],
    maxPagesToCrawl: 90000,
    waitForSelectorTimeout: 2000,
    outputType: "database",
    outputFileName: "./output.json",
    outputDatabaseHost: "",
    outputDatabasePort: 10006,
    outputDatabaseUser: "",
    outputDatabasePSW: "",
    outputDatabase: ""
};