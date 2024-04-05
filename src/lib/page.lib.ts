import { Page } from "playwright/test";

let currpage: Page;

export function page(): Page {
    return currpage;
}

export function setPage(pageIns: Page): void {
    currpage=pageIns;
}