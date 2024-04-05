import { step,attachScreenshot } from "./allure";
import { test as base,expect} from "@playwright/test";

base.afterEach(async ({ page}, testInfo ) => {
    if (testInfo.status === 'passed') return; // Skip if the test passed
  
    await attachScreenshot(page, `${testInfo.title}_FailureScreenshot`);
  });

// assertions.ts

// export const expect = async (value: any, message?: string) => {
//   try {
//     await playwrightExpect(value, message);
//   } catch (error) {
//     // Attach a screenshot on expectation failure
//     const page = (global as any).__testWorker__.page;
//     await attachScreenshot(page, 'ExpectationFailureScreenshot');
//     if (message && message.includes('toHaveTitle')) {
//         await attachScreenshot(page, 'ExpectationTitleFailureScreenshot');
//       }
//     throw error; // Re-throw the error to mark the test as failed
//   }
// };


export  {step,expect};

export const test=base;
