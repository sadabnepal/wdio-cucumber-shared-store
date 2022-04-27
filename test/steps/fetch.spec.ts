import { SharedKeys } from '@Common/SharedKeys';
import { setValueToSharedStore } from '@Helper/datastore';
import loginPage from '@Pages/login.page';
import { Given, When } from '@wdio/cucumber-framework';

Given(/^I am on the login page$/, async () => {
    await loginPage.open()
});

When(/^I fetch username from the login page instruction$/, async () => {
    setValueToSharedStore(SharedKeys.username, await loginPage.username.getText())
})