// @ts-ignore
import { Config } from "./src/config";


export const defaultConfig: Config = {
    url: "https://hc.jiandaoyun.com/doc/",
    match: "https://hc.jiandaoyun.com/doc/**",
    inclusions: [".page-title",".markdown-body"],
    maxPagesToCrawl: 9000,
    waitForSelectorTimeout: 2000,
    outputType: "database",
    outputFileName: "/Users/luowei/Documents/Pycharm/Crawler/output.json",
    outputDatabaseHost: "p-dbsec-mysql.gz.cvte.cn",
    outputDatabasePort: 10006,
    outputDatabaseUser: "admin_publicdata",
    outputDatabasePSW: "YWRtaW5fcHVibGlj_ZGF0YQo",
    outputDatabase: "publicdata"
};