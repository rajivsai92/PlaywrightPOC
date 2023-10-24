import { Before, BeforeAll, After, AfterAll } from "@cucumber/cucumber";
import {Browser,BrowserContext} from "@playwright/test";
import {invokeBrowser} from "../utilities/browsersetting/BrowserManager";
import {getEnv} from "../utilities/env/env";
import {pageFixture} from "../hooks/pagefixture";

let browser: Browser;
let context: BrowserContext;

BeforeAll(async function() {
    getEnv();
    browser = await invokeBrowser();
});

Before(async function() {
    context = await browser.newContext();
    const page = await context.newPage();
    pageFixture.page = page;
});

After(async function() {
    await context.close();
});

AfterAll(async function() {
    await browser.close();
});