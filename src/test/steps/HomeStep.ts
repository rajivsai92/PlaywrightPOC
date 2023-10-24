//setDefaultTimeout(60 * 1000 * 2)

import { Given, Then, When } from "@cucumber/cucumber";
import HomePageObj from "../../pages/HomePageObj";
import { expect } from "@playwright/test";

Given('I Navigate to Options Platform', async function () {
    await HomePageObj.navigateToLoginPage();
});

When('I click on {string} link on left Navigation', async function(tab:string) {
    await HomePageObj.NavigateToTab(tab);
});

Then('Verify header title as {string} id displayed', async function(title:string) {
    expect(await HomePageObj.VerifyPageTitle()).toEqual(title); 
});