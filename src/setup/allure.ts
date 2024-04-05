import {allure} from 'allure-playwright';

export const step = async (name: string, callback: () => Promise<void>) => {
    return allure.step(name, async () => {
      await callback();
    });
  };

export const attachScreenshot = async (page: any, name: string) => {
    const screenshot = await page.screenshot();
    allure.attachment(name, screenshot, 'image/png');
  };
