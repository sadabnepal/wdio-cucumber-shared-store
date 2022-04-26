import { SharedKeys } from '@Common/SharedKeys';
import { getValueFromSharedStore } from '@Helper/datahandler';
import loginPage from '@Pages/login.page';
import { Then, When } from '@wdio/cucumber-framework';

When(/^I login with username and (.+)$/, async (password: string) => {
    // reading data from shared storre with helper function
    const username = await getValueFromSharedStore(SharedKeys.username)
    await loginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message: string) => {
    await expect(loginPage.flashAlert).toBeExisting();
    await expect(loginPage.flashAlert).toHaveTextContaining(message);
});

