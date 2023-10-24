import { match } from "assert";
import { pageFixture } from "../hooks/pagefixture";
const StringFormat = (str:string, ...args:string[]) => str.replace(/{(\d+)}/g, (match, index) => args[index] || '')

class HomePageObj
{
    private elements = 
    {
        tabs: "//*[@id='sidebar']/ul/li[{0}]/a",
        balancingTitle : ".um-page-title",
        pagetitle : "//h1[@class='um-page-title']",
    }

    public async navigateToLoginPage() {
        await pageFixture.page.goto(process.env.BASEURL);
    }

    public async NavigateToTab(tabName:string) {
        let ele;
        
        if(tabName == "Exercise Review")
        {
            ele = await StringFormat(this.elements.tabs,"1");
        }
        if(tabName == "Position Balancing")
        {
            ele = await StringFormat(this.elements.tabs,"2");
        }

        await pageFixture.page.locator(ele).click();
    }

    public async VerifyPageTitle():Promise<string> {
        return await pageFixture.page.locator(this.elements.pagetitle).textContent();
    }
    
}

export default new HomePageObj