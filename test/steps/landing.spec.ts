import { SharedKeys } from '@Common/SharedKeys';
import { setValueToSharedStore } from '@Helper/datahandler';
import loginPage from '@Pages/login.page';
import { Given } from '@wdio/cucumber-framework';

Given(/^I am on the login page$/, async () => {
    await loginPage.open()
    //Fetching username from page and passing to shared store
    setValueToSharedStore(SharedKeys.username, await loginPage.username.getText())
});