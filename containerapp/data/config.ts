// @ts-ignore
import { Config } from "./src/config";

export const defaultConfig: Config = {
    url: "https://hc.jiandaoyun.com/doc/",
    match: "https://hc.jiandaoyun.com/doc/**",
    selector: ".x-page-content",
    maxPagesToCrawl: 1000000,
    outputFileName: "../data/output.json"
};
