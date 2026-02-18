/*
Run all sanity checks
npx playwright test tagging.spec.ts --grep "@sanity"

Run all Regression checks
npx playwright test tagging.spec.ts --grep "@regression"

3.  run tests which are belongs to both sanity and regression

npx playwright test tagging.spec.ts --grep "(?=.*@sanity)(?=.*@regression)"
(?=.*@sanity)
(?=.*@regression)
(?=.*@sanity)(?=.*@regression)

4) run tests which are belongs to both sanity or  regression
npx playwright test tagging.spec.ts --grep "@sanity | @regression "

5) Run sanity test which are not belongs to regression
npx playwright test tagging.spec.ts --grep "@sanity" --grep-invert "regression"
*/


import {test,expect} from "@playwright/test";

test(" @sanity Check title of the page",async({page})=>{

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});

test(
  'title of the page1', { tag: '@sanity' },async ({ page }) => {

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});

test(
  'title of the page2', { tag: '@regression' },async ({ page }) => {

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});
test(
  'title of the page3', { tag:['@sanity', '@regression']},async ({ page }) => {

    await page.goto("https://www.google.com/");
    await expect (page).toHaveTitle('Google')

});