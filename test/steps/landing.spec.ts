import loginPage from '@Pages/login.page';
import { Given } from '@wdio/cucumber-framework';
import { setValue } from '@wdio/shared-store-service';


Given(/^I am on the login page$/, async () => {
    await loginPage.open()
    //Fetching username from page and passing to shared store
    setValue('username', await loginPage.username.getText())
});
