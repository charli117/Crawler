#!/usr/bin/env node

import { program } from "commander";
import { Config } from "./config.js";
import {crawl, writeDatabase, writeJson} from "./core.js";
import { createRequire } from "node:module";
import inquirer from "inquirer";
import {defaultConfig} from "../config";

const require = createRequire(import.meta.url);
const { version, description } = require("../../package.json");

const messages = {
  url: "What is the first URL of the website you want to crawl?",
  match: "What is the URL pattern you want to match?",
  inclusions: "What is the CSS inclusions you want to match?",
  maxPagesToCrawl: "How many pages do you want to crawl?",
  outputFileName: "What is the name of the output file?",
  outputType: "What is the storage mode of the output file?",
  outputDatabaseHost: "What is the database host of the output file?",
  outputDatabasePort: "What is the database host port of the output file?",
  outputDatabaseUser: "What is the database user name of the output file?",
  outputDatabasePSW: "What is the database user password of the output file?",
  outputDatabase: "What is the database name of the output file?",
};

async function handler(options: Config) {
  try {
    const {
      url,
      match,
      inclusions,
      maxPagesToCrawl: maxPagesToCrawlStr,
      outputFileName,
      outputType,
      outputDatabaseHost,
      outputDatabasePort,
      outputDatabaseUser,
      outputDatabasePSW,
      outputDatabase,
    } = options;

    // @ts-ignore
    const maxPagesToCrawl = parseInt(maxPagesToCrawlStr, 10);

    let config: Config = {
      url,
      match,
      inclusions,
      maxPagesToCrawl,
      outputFileName,
      outputType,
      outputDatabaseHost,
      outputDatabasePort,
      outputDatabaseUser,
      outputDatabasePSW,
      outputDatabase,
    };

    if (!config.url || !config.match || !config.inclusions) {
      const questions = [];

      if (!config.url) {
        questions.push({
          type: "input",
          name: "url",
          message: messages.url,
        });
      }

      if (!config.match) {
        questions.push({
          type: "input",
          name: "match",
          message: messages.match,
        });
      }

      if (!config.inclusions) {
        questions.push({
          type: "input",
          name: "selector",
          message: messages.inclusions,
        });
      }

      const answers = await inquirer.prompt(questions);

      config = {
        ...config,
        ...answers,
      };
    }

    await crawl(config);

    if (config.outputType === 'json'){
      await writeJson(config);
    } else {
      await writeDatabase(config);
    }

  } catch (error) {
    console.log(error);
  }
}

program.version(version).description(description);

program
  .option("-u, --url <string>", messages.url, "")
  .option("-m, --match <string>", messages.match, "")
  .option("-s, --selector <datalist>", messages.inclusions, "")
  .option("-m, --maxPagesToCrawl <number>", messages.maxPagesToCrawl, "50")
  .option(
    "-o, --outputFileName <string>",
    messages.outputFileName,
    "output.json",
  )
  .action(handler);

program.parse();
